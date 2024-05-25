import { configData } from "./mockData"
import { ErrorMessage } from './interfaces'

class MediatorService {
  private isAuthenticated: boolean = false
  private scoreInterval?: number

  constructor() {
    console.log("Mediator initialized")
    window.addEventListener('custom-websocket-connection', (event: any) => this.handleConnection(event))
  }

  private async handleConnection(event: CustomEvent): Promise<void> { 
    const clientName = event.detail
    console.log(`Handling connection for user: ${clientName}`)
    const isAuthenticated = await this.handleConnect(clientName)
    if (isAuthenticated) {
      this.sendScoreUpdatesByTimeInterval()
    } else {
      this.sendError({ error: "Authentication failed", status: 400 })
    }
  }

  private sendScoreUpdatesByTimeInterval() {
    if (this.scoreInterval !== undefined) {
      clearInterval(this.scoreInterval as number);
    }
    this.scoreInterval = window.setInterval(() => {
      if (this.isAuthenticated) {
        this.updateScore()
      }
    }, configData.pollingFrequency)
    
  }

  private updateScore() {
    const { min, max } = configData.scoreRange;
    const newScore = Math.floor(Math.random() * (max - min + 1) + min)
    const event = new CustomEvent('score-update', { detail: newScore})
    window.dispatchEvent(event)
  }

  private async handleConnect(clientName: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (configData.allowedClients.includes(clientName)) {
          this.isAuthenticated = true
          resolve(true)
        } else {
          this.isAuthenticated = false
          resolve(false)
        }
      }, 1000)
    })
  }

  private sendError(errorMsg: ErrorMessage) {
    console.log(`Sending error: ${errorMsg.error}`)
    const event = new CustomEvent('error', { detail: errorMsg })
    window.dispatchEvent(event)
  }
}

export default MediatorService
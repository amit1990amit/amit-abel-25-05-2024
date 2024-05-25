import { configData } from "./mockData"
import { ErrorMessage } from './interfaces'

class MediatorService {
  private isAuthenticated: boolean = false

  constructor() {
    console.log("Mediator initialized")
    window.addEventListener('custom-websocket-connection', (event: any) => this.handleConnection(event))
  }

  private async handleConnection(event: CustomEvent): Promise<void> { 
    const clientName = event.detail
    console.log(`Handling connection for user: ${clientName}`)
    const isAuthenticated = await this.handleConnect(clientName)
    if (isAuthenticated) {
      // TODO  send scores
    } else {
      this.sendError({ error: "Authentication failed", status: 400 })
    }
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
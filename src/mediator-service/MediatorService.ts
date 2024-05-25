import { configData } from "./mockData"
import { ErrorMessage } from './interfaces'
import { connectClient, generateNewScore, dispatchCustomEvent } from './utils'
import {
  SCORE_UPDATE,
  ERROR,
  CUSTOM_WEBSOCKET_CONNECTION
} from '../consts'

class MediatorService {
  private isAuthenticated: boolean = false
  private scoreInterval?: number

  constructor() {
    window.addEventListener(CUSTOM_WEBSOCKET_CONNECTION, (event: any) => this.handleConnection(event))
  }

  private async handleConnection(event: CustomEvent): Promise<void> { 
    const clientName = event.detail
    const isAuthenticated = await connectClient(clientName)
    if (isAuthenticated) {
      this.isAuthenticated = true
      this.sendScoreUpdatesByTimeInterval()
    } else {
      this.isAuthenticated = false
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
    const newScore = generateNewScore()
    dispatchCustomEvent(SCORE_UPDATE, newScore)
  }

  private sendError(errorMsg: ErrorMessage) {
    dispatchCustomEvent(ERROR, errorMsg)
  }
}

export default MediatorService
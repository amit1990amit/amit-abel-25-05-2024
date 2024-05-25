import { dispatchCustomEvent } from './utils'
import { CUSTOM_WEBSOCKET_CONNECTION } from '../consts'

import MediatorService from './MediatorService';
// initializing mediator
const mediator = new MediatorService()

const simulateConnection = (clientName: string) => {
  dispatchCustomEvent(CUSTOM_WEBSOCKET_CONNECTION, clientName)
}

export default simulateConnection 

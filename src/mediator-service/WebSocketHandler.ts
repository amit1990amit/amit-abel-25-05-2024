
import MediatorService from './MediatorService';
// initializing mediator
const mediator = new MediatorService()

const simulateConnection = (clientName: string) => {
  console.log(`Simulating connection for client: ${clientName}`)
  const event = new CustomEvent('custom-websocket-connection', { detail: clientName })
  window.dispatchEvent(event)
}

export default simulateConnection 

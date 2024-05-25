import { configData } from "./mockData"

export const connectClient = (clientName: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (configData.allowedClients.includes(clientName)) {
        resolve(true)
      } else {
        resolve(false)
      }
    }, 1000)
  })
}

export const generateNewScore = (): number => {
  const { min, max } = configData.scoreRange
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const dispatchCustomEvent = (eventName: string, detail: any): void => {
  const event = new CustomEvent(eventName, { detail })
  window.dispatchEvent(event)
}

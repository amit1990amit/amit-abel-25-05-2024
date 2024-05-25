import { scoreRange } from './types'

export interface configType {
  pollingFrequency: number;
  scoreRange: scoreRange;
  allowedClients: string[];
}

export interface ErrorMessage {
  error: string;
  status: number;
}
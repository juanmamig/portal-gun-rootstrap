export type ErrorType = 'character' | 'server' | 'notFound' | 'unknown';

export interface IErrorMessage {
  type: ErrorType;
  name?: string;
}

export interface ErrorResponse {
  type: ErrorType;
}

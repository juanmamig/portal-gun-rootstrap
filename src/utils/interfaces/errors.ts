export type ErrorType =
  | 'noCharacter'
  | 'characterSearch'
  | 'server'
  | 'notFound'
  | 'unknown';

export enum ErrorTypes {
  characterSearch = 'characterSearch',
  noCharacter = 'noCharacter',
  server = 'sever',
  unknown = 'unknown',
  notFound = 'notFound',
}

export interface IErrorMessage {
  type: ErrorType;
  name?: string;
}

export interface ErrorResponse {
  type: ErrorType;
}

import { type StatusCode as HonoStatusCode } from 'hono/utils/http-status';

export type RuntimeError = {
  message: string;
  type: 'RuntimeError';
};

export type InvalidParameterError = {
  message: string;
  type: 'InvalidParameterError';
};

export type NotFoundError = {
  type: 'NotFoundError';
  message?: string;
};

export type ConflictError = {
  message: string;
  type: 'ConflictError';
};

export type ValidationError = {
  message: string | string[];
  type: 'ValidationError';
};

export type UnauthorizedError = {
  type: 'UnauthorizedError';
};

export type Error =
  | RuntimeError
  | NotFoundError
  | ConflictError
  | ValidationError
  | UnauthorizedError
  | InvalidParameterError;

export const StatusCode: Record<string, HonoStatusCode> = {
  Success: 200,
  NotFoundError: 404,
  ConflictError: 409,
  InvalidParameterError: 400,
  ValidationError: 400,
  BadRequestError: 400,
  RuntimeError: 500,
  UnauthorizedError: 401,
};

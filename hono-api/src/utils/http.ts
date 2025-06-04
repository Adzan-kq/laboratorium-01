import z from 'zod';
import { type Error, StatusCode } from './error';

export type Result<T, E = Error> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: E;
    };

export function parseAndValidate<T extends z.ZodTypeAny>(
  rawData: string | undefined,
  schema: T
): Result<z.infer<T>, Error> {
  if (!rawData) {
    return {
      ok: false,
      error: {
        type: 'ValidationError',
        message: 'Missing input',
      },
    };
  }
  const jsonData = JSON.parse(rawData);
  const parseResult = schema.safeParse(jsonData);

  if (parseResult.success) {
    const parsedData = parseResult.data as z.infer<T>;
    return {
      ok: true,
      value: parsedData,
    };
  } else {
    const errorMessages = parseResult.error.issues.map((e) => {
      let errMsg = e.message;
      if (e.path.length > 0) errMsg += ` (${e.path.join(',')})`;
      return errMsg;
    });

    return {
      ok: false,
      error: {
        type: 'ValidationError',
        message: errorMessages,
      },
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function responseError(context: any, error: Error) {
  let message: string[] | undefined;
  switch (error.type) {
    case 'RuntimeError':
    case 'InvalidParameterError':
    case 'ConflictError':
      message = [error.message];
      break;
    case 'NotFoundError':
      message = error.message ? [error.message] : undefined;
      break;
    case 'ValidationError':
      message = Array.isArray(error.message) ? error.message : [error.message];
      break;
  }

  const response = {
    statusCode: StatusCode[error.type],
    body: {
      statusCode: StatusCode[error.type],
      messages: message,
    },
  };

  return context.json(response.body, response.statusCode);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function responseSuccess<T>(context: any, result?: T) {
  const response = {
    statusCode: StatusCode['Success'],
    body: {
      statusCode: StatusCode['Success'],
      result: result,
    },
  };

  return context.json(response.body, response.statusCode);
}

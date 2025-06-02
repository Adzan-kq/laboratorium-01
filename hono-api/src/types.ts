import { Handler, MiddlewareHandler } from 'hono';
import { createFactory } from 'hono/factory';

export const honoFactory = createFactory();

export type Methods = [
  'get',
  'post',
  'put',
  'delete',
  'options',
  'patch'
][number];

export interface HonoRoute {
  path: string;
  method: Methods;
  handlers?: Handler[];
  middlewares?: MiddlewareHandler[];
  isAuth?: boolean;
  checkPermission?: boolean;
  allowedPermissions?: string[];
}

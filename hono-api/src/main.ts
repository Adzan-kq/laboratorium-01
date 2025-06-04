import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import { HonoRoute } from './types';
import studentRoute from './routes/student.route';
import userRoute from './routes/user.route';

const app = new Hono();

const routes: HonoRoute[] = [...studentRoute, ...userRoute];

routes.map((route) => {
  if (route.middlewares) {
    app.on(route.method, route.path, ...route.middlewares);
  }
  if (route.handlers) {
    app.on(route.method, route.path, ...route.handlers);
  }
});

serve({
  fetch: app.fetch,
  port: 3001,
});

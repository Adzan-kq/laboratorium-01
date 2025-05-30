import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import { db } from './db';
import { students } from './db/schema-table';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello from Hono in Nx!');
});

app.get('/students', async (c) => {
  const result = await db.select().from(students);
  return c.json(result);
});

serve({
  fetch: app.fetch,
  port: 3001,
});

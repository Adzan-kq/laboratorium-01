import { db } from '../../db';
import { students } from '../../db/schema-table';
import { honoFactory } from '../../types';

export const list = honoFactory.createHandlers(async (c) => {
  const result = await db.select().from(students);
  return c.json(result);
});

import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  age: integer('age').notNull(),
  classId: integer('class_id'),
});

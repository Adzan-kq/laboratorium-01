import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
  id: serial('id').primaryKey(),
  username: varchar('username').notNull(),
  password: varchar('password').notNull(),
  createdAt: varchar('created_at').notNull(),
  updatedAt: varchar('updated_at').notNull(),
});

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  age: integer('age').notNull(),
  classId: integer('class_id').notNull(),
  createdAt: varchar('created_at').notNull(),
  updatedAt: varchar('updated_at').notNull(),
});

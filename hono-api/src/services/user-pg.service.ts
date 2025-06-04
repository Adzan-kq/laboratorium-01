import { db } from '../db/index.js';
import { users } from '../db/schema-table.js';

export class UserPgService {
  async create(newItem: { username: string; password: string }) {
    return db.insert(users).values({
      username: newItem.username,
      password: newItem.password,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
}

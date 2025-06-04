import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { students } from '../db/schema-table.js';

export class StudentPgService {
  async list() {
    return await db.select().from(students);
  }

  async create(name: string) {
    await db.insert(students).values({
      name,
      age: 0,
      classId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return;
  }

  async delete(id: number) {
    return db.delete(students).where(eq(students.id, id));
  }
}

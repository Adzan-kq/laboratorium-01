import { StudentPgService } from '../../services/student-pg.service';
import { honoFactory } from '../../types';
import { responseError, responseSuccess } from '../../utils/http';

export const list = honoFactory.createHandlers(async (c) => {
  try {
    const studentService = new StudentPgService();

    const result = await studentService.list();

    return responseSuccess(c, result);
  } catch (error) {
    return responseError(c, {
      type: 'RuntimeError',
      message: (error as Error).message,
    });
  }
});

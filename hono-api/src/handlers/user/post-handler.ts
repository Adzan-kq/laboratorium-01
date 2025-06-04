import { UserPgService } from '../../services/user-pg.service';
import { honoFactory } from '../../types';
import { responseError, responseSuccess } from '../../utils/http';

export const create = honoFactory.createHandlers(async (c) => {
  try {
    const userService = new UserPgService();

    const body = await c.req.json();

    await userService.create(body);

    return responseSuccess(c, {
      message: 'Berhasil membuat user',
    });
  } catch (error) {
    return responseError(c, {
      type: 'RuntimeError',
      message: (error as Error).message,
    });
  }
});

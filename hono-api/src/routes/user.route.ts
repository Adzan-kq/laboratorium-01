import * as handlers from '../handlers/user';
import type { HonoRoute } from '../types';

const userRoute: HonoRoute[] = [
  {
    path: '/users',
    method: 'post',
    handlers: handlers.create,
  },
];

export default userRoute;

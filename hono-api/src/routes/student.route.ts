import * as handlers from '../handlers/student';
import type { HonoRoute } from '../types';

const studentRoute: HonoRoute[] = [
  {
    path: '/students',
    method: 'get',
    handlers: handlers.list,
  },
];

export default studentRoute;

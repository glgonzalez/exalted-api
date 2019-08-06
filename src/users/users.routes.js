import { Router } from 'express';
import { usersController } from './users.controller';

export const usersRoutes = (Users) => {
  const usersRouter = Router();
  const controller = usersController(Users);

  usersRouter.route('/')
    .get(controller.get)
    .post(controller.post);
  usersRouter.route('/:id')
    .get(controller.getById);

  return usersRouter;
};

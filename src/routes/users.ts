import usersController from '../controllers/users.controller';
import express from 'express';

const usersRouter = express.Router();

usersRouter
  .get('/', usersController.getAllUsers)
  .get('/:id', usersController.getUser)
  .post('/', usersController.createUser)
  .put('/:id', usersController.updateUser)
  .delete('/:id', usersController.deleteUser);

export default usersRouter;
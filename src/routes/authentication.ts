import usersController from '../controllers/users.controller';
import express from 'express';

const authenticationRouter = express.Router();

authenticationRouter
  .post('/', usersController.authenticate);

export default authenticationRouter;
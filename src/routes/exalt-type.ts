import exaltTypeController from "../controllers/exalt-type.controller";
import express from 'express';

const exaltTypeRouter = express.Router();

exaltTypeRouter
  .get('/', exaltTypeController.getAll);

export default exaltTypeRouter;
import attributesController from "../controllers/attributes.controller";
import express from 'express';

const attributesRouter = express.Router();

attributesRouter.get('/', attributesController.getAll);

export default attributesRouter;
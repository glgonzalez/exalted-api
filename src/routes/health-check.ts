import healthCheck from '../controllers/health-check.controller';
import express from 'express';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/', healthCheck);

export default healthCheckRouter;
import { Router } from 'express';
import { Users, usersRoutes } from './users';
import { Attributes, attributeRoutes } from './attributes';
import { Abilities, abilityRoutes } from './abilities';
import { authenticateRoutes } from './authentication';
import { authError } from '../middleware/auth-error';

const apiRouter = Router();

apiRouter.use('/abilities', abilityRoutes(Abilities));
apiRouter.use('/attributes', attributeRoutes(Attributes));
apiRouter.use('/users', usersRoutes(Users));
apiRouter.use('/authenticate', authenticateRoutes(Users), authError);

export default apiRouter;

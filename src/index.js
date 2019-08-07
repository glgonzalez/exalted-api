import { Router } from 'express';
import { Users, usersRoutes } from './users';
import { Attributes, attributeRoutes } from './attributes';
import { Abilities, abilityRoutes } from './abilities';
import { authenticateRoutes } from './authentication';
import { authError, userError } from '../middleware';

const apiRouter = Router();

apiRouter.use('/abilities', abilityRoutes(Abilities));
apiRouter.use('/attributes', attributeRoutes(Attributes));
apiRouter.use('/users', usersRoutes(Users), userError);
apiRouter.use('/authenticate', authenticateRoutes(Users), authError);

export default apiRouter;

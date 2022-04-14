import { Request, Response, NextFunction} from 'express';

const healthCheck = (req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(200);
};

export default healthCheck;
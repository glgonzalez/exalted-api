import { Request, Response } from 'express'; 
import exaltTypeModel from '../models/exalt-type.model';

const exaltTypeController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const results = await exaltTypeModel.findAll();
      return res.status(200).json(results);
    } catch(e: any) {
      res.status(500).json(e);
    }
  }
}

export default exaltTypeController;
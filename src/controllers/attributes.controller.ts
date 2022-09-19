import { Request, Response } from 'express';
import attributesModel from '../models/attributes.model';

const attributesController = {
  getAll: async ( req: Request, res: Response) => {
    try {
      const results = await attributesModel.findAll();
      return res.status(200).json(results);
    } catch(e: any) {
      res.status(500).json(e);
    }
  }
}

export default attributesController;
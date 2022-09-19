import { Request, Response } from 'express';
import users, { User } from "../models/users.model";
import bcrypt from 'bcryptjs';

const usersController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const all = await users.findAll();
      return res.status(200).json(all);
    } catch (e: any) {
      return res.status(500).json(e);
    }
  },
  getUser: async (req: Request, res: Response) => {
    try{
      const user = await users.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch(e: any) {
      return res.status(500).json(e);
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const user_model: User = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      };
      const user = await users.create(user_model);
      return res.status(201).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const user_model: User = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      };
      const user = await users.update(user_model, {where: {id: req.params.id}});
      return res.status(200).json(user);
    } catch(e) {
      return res.status(500).json(e);
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await users.destroy({where: {id: req.params.id}});
      return res.status(200).json(user);
    } catch(e) {
      return res.status(500).json(e);
    }
  },
  authenticate: async (req: Request, res: Response) => {
    try {
      const user = await users.findOne({where: { email: req.body.email }});
      if(user && bcrypt.compareSync(req.body.password, user.getDataValue('password'))) {
        res.status(200).json(true);
      } else {
        res.status(401).send(false);
      }
    } catch(e) {
      return res.status(500).json(e);
    }
  }
}

export default usersController;
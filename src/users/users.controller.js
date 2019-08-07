import * as bcrypt from 'bcrypt';
import { createAuthToken } from '../../middleware';

export const usersController = (Users) => {
  const get = (req, res) => {
    const query = {};
    Users.find(query, null)
      .exec((err, abilities) => {
        if (err) {
          return res.send(err);
        }
        return res.json(abilities);
      });
  };

  const getById = (req, res, next) => {
    Users.findById(req.params.id, (err, user) => {
      if (err) {
        next(new Error(err));
      }
      if (user) {
        req.user = user;
        return res.json(req.user);
      }
      return res.status(404);
    });
  };

  const post = async (req, res, next) => {
    try {
      const saltRounds = 10;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
      const user = new Users(req.body);
      const savedUser = await user.save();
      const token = await createAuthToken({ payloadData: savedUser, maxAge: 3600 });
      return res.status(201)
        .send({
          status: res.status,
          user: {
            username: savedUser.username,
            email: savedUser.email,
            role: savedUser.role
          },
          access_token: token
        });
    } catch (err) {
      return next(err);
    }
  };

  return { get, getById, post };
};

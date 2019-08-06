import * as bcrypt from 'bcrypt';

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

  const post = async (req, res) => {
    try {
      const saltRounds = 10;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
      const user = new Users(req.body);
      user.save();
      res.status(201);
      return res.json(user);
    } catch (err) {
      return res.status(500).send({
        status: res.status,
        message: 'Something went wrong',
        error: err
      });
    }
  };

  return { get, getById, post };
};

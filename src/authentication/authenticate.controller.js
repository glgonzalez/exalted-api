import { createAuthToken, verifyPassword } from '../../middleware';

export const authenticateController = (Users) => {
  const post = (req, res, next) => {
    if (!req.body.username) {
      throw new Error('username.missing');
    }

    if (!req.body.passowrd) {
      throw new Error('password.missing');
    }

    Users.findOne({ username: req.body.username }).exec(async (err, user) => {
      try {
        const passwordMatch = await verifyPassword(req.body.password, user.password);
        if (!passwordMatch) {
          return res.status(401).send({
            status: res.status,
            message: 'auth.invalid'
          });
        }

        const token = await createAuthToken({ payloadData: user, maxAge: 3600 });

        return res.status(200).send({
          status: res.status,
          access_token: token,
          message: 'Success'

        });
      } catch (e) {
        next(new Error(e));
      }
    });
  };

  return { post };
};

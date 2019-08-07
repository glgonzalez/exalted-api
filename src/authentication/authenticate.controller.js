import { createAuthToken, verifyPassword } from '../../middleware';
import * as ERRORS from '../../util/errors';

export const authenticateController = (Users) => {
  const post = (req, res, next) => {
    if (!req.body.username) {
      throw new Error(ERRORS.USERNAME_MISSING);
    }

    if (!req.body.password) {
      throw new Error(ERRORS.PASSWORD_MISSING);
    }

    Users.findOne({ username: req.body.username }).exec(async (err, user) => {
      try {
        if (!user) {
          throw new Error(ERRORS.USER_NOT_FOUND);
        }
        if (err) {
          throw new Error(err);
        }
        const passwordMatch = await verifyPassword(req.body.password, user.password);
        if (!passwordMatch) {
          throw new Error(ERRORS.AUTH_INVALID);
        }

        const token = await createAuthToken({ payloadData: user, maxAge: 3600 });

        return res.status(200).send({
          status: res.status,
          access_token: token,
          message: 'Success'

        });
      } catch (e) {
        return next(e);
      }
    });
  };

  return { post };
};

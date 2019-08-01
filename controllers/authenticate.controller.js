import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const authenticateController = (Users) => {
  const post = (req, res) => {
    Users.findOne({ username: req.body.username }).exec(async (err, user) => {
      try {
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
          return res.status(401).send({
            status: res.status,
            message: 'auth.invalid'
          });
        }

        const token = await jwt.sign(
          { data: user },
          process.env.JWT_SECRET,
          {
            expiresIn: 3600,
            algorithm: 'HS256'
          }
        );

        return res.status(200).send({
          status: res.status,
          access_token: token,
          message: 'Success'

        });
      } catch (e) {
        return res.status(404).send({
          status: res.status,
          message: 'User not found',
        });
      }
    });
  };

  return { post };
};

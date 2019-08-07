import * as ERRORS from '../util/errors';

export const userError = (err, req, res, next) => {
  if (err.errors && err.errors.username) {
    return res.status(404)
      .send({
        status: res.status,
        message: `${err.errors.username.path}.${err.errors.username.kind}`,
        field: err.errors.username.path
      });
  }

  if (err.errors && err.errors.email) {
    return res.status(404)
      .send({
        status: res.status,
        message: `${err.errors.email.path}.${err.errors.email.kind}`,
        field: err.errors.email.path
      });
  }

  if (err.code && err.code === 11000) {
    const isEmail = err.message.indexOf('email');
    return res.status(403)
      .send({
        status: res.status,
        message: isEmail ? ERRORS.EMAIL_EXISTS : ERRORS.USERNAME_EXISTS
      });
  }

  return res.status(500)
    .send({
      status: res.status,
      error: err
    });
};

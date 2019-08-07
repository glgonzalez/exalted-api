import * as ERRORS from '../util/errors';

export const authError = (err, req, res, next) => {
  switch (err.message) {
  case ERRORS.USERNAME_MISSING:
  case ERRORS.PASSWORD_MISSING:
    res.status(400)
      .send({
        status: res.status,
        message: err.message
      });
    break;
  case ERRORS.AUTH_INVALID:
    res.status(401)
      .send({
        status: res.status,
        message: err.message
      });
    break;
  case ERRORS.USER_NOT_FOUND:
    res.status(404)
      .send({
        status: res.status,
        message: err.message
      });
    break;
  default:
    res.status(500)
      .send({
        status: res.status,
        message: err.message
      });
    break;
  }
};

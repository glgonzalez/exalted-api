export const authError = (err, req, res, next) => {
  switch (err.message) {
  case 'username.missing':
    res.status(400)
      .send({
        status: res.status,
        message: err.message
      });
    break;
  case 'password.missing':
    res.status(400)
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

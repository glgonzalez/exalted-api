import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config/config';

export const createAuthToken = async (details) => {
  if (typeof details !== 'object') {
    details = {};
  }

  if (!details.maxAge || typeof details.maxAge !== 'number') {
    details.maxAge = 3600;
  }
  return await jwt.sign(
    { data: details.payloadData.id },
    config.secrets.jwt,
    {
      expiresIn: details.maxAge,
      algorithm: 'HS256'
    }
  );
};

export const verifyAuthToken = async token => await jwt.verify(token, config.secrets.jwt);

export const verifyPassword = async (password, passwordHash) => {
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch (err) {
    throw new Error(err);
  }
};

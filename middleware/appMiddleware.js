import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config';

export function appMiddleware(app) {
  try {
    mongoose.connect(config.db, { useNewUrlParser: true, dbName: 'exalted' });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  app.use(
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
  );
}

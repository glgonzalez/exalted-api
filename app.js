import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Abilities, Attributes, Users } from './models';
import {
  abilityRoutes,
  attributeRoutes,
  usersRoutes,
  authenticateRoutes
} from './routes';

const app = express();

if (process.env.env === 'local') {
  // eslint-disable-next-line no-console
  console.log('Test Environment');
  mongoose.connect('mongodb://localhost/exalted', { useNewUrlParser: true });
} else {
  // eslint-disable-next-line no-console
  console.log('Developement');
  mongoose.connect('mongodb+srv://glgonzalez:exalted051389@exalted-ljnph.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: 'exalted' })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
}

const port = process.env.PORT || 3000;

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);

app.use('/api/abilities', abilityRoutes(Abilities));
app.use('/api/attributes', attributeRoutes(Attributes));
app.use('/api/users', usersRoutes(Users));
app.use('/api/authenticate', authenticateRoutes(Users));

app.get('/', (req, res) => {
  res.send('Welcome to the Exalted API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
  if (!process.env.JWT_SECRET) {
    process.env.JWT_SECRET = 'exaltedapisecret';
  }
});

export default app;

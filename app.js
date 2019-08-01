import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Abilities from './models/abilities.model';
import Attributes from './models/attributes.model';
import abilitiesRouter from './routes/abilities.routes';
import attributesRouter from './routes/attributes.routes';

const app = express();

if (process.env.env === 'local') {
  // eslint-disable-next-line no-console
  console.log('Test Environment');
  const db = mongoose.connect('mongodb://localhost/exalted', { useNewUrlParser: true });
} else {
  // eslint-disable-next-line no-console
  console.log('Developement');
  const db = mongoose.connect('mongodb+srv://glgonzalez:exalted051389@exalted-ljnph.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: 'exalted' })
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

app.use('/api/abilities', abilitiesRouter(Abilities));
app.use('/api/attributes', attributesRouter(Attributes));

app.get('/', (req, res) => {
  res.send('Welcome to the Exalted API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});

export default app;

import express from 'express';
import apiRouter from './src';
import appMiddleware from './middleware/appMiddleware';
import config from './config/config';

const app = express();

appMiddleware(app);

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Exalted API');
});

app.server = app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${config.port}`);
});

export default app;

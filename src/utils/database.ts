import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import envConfig from '../config/config';

dotenv.config();

const config = envConfig[process.env.NODE_ENV || 'development']

export const db = new Sequelize(
  config.database as string,
  config.username as string,
  config.password,
  {
    host: config.host,
    dialect: 'postgres'
  }
);

const connect = async () => {
  try {
    await db.sync({ force: false});
    console.log('Connected to database successfully');
  } catch(e) {
    console.error('Cound not connect to database: ', e);
    process.exit(1);
  }
}

export default connect;
import { UUID, UUIDV4, STRING, Model } from 'sequelize';
import { db } from '../utils/database';
import bcrypt from 'bcryptjs';

export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const users = db.define<Model<User>>('users', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: STRING,
    allowNull: false
  },
  last_name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false,
    set(value: string) {
      this.setDataValue('password', bcrypt.hashSync(value, 10));
    }
  }
});

export default users;
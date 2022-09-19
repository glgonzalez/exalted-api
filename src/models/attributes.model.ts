import { Model, INTEGER, STRING } from 'sequelize';
import { db } from '../utils/database';

interface Attributes {
  id?: number;
  name: string;
  type: string;
}

const attributesModel = db.define<Model<Attributes>>('attributes', {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  type: {
    type: STRING,
    allowNull: false
  }
});

export default attributesModel;

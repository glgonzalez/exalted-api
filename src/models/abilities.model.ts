import { Model, INTEGER, STRING } from 'sequelize';
import { db } from '../utils/database';

interface Abilities {
  id?: number;
  name: string;
  type: string;
}

const abilitiesModel = db.define<Model<Abilities>>('abilities', {
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

export default abilitiesModel;

import { Model, INTEGER, STRING } from 'sequelize';
import { db } from '../utils/database';

interface ExaltType {
  id?: number;
  name: string;
}

const exaltTypeModel = db.define<Model<ExaltType>>('exalt-types', {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  }
});

export default exaltTypeModel;
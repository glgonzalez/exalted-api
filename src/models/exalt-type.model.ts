import { Model, NUMBER, STRING } from 'sequelize';
import { db } from '../utils/database';

interface ExaltType {
  id: number;
  type: string;
}

const exaltTypeModel = db.define<Model<ExaltType>>('exalt_type', {
  id: {
    type: NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: STRING,
    allowNull: false
  }
});

export default exaltTypeModel;
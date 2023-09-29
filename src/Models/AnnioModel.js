import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class annio extends Model {}
annio.init({
    idAnnio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  nomAnnio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  curriculaAnnio: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Annio',
  tableName: 'annio',
  timestamps: false, 
});

export default annio;
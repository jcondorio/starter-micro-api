import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class horasHT extends Model {}
horasHT.init({
    idHT: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  horasHT: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'HT',
  tableName: 'hT',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default horasHT;
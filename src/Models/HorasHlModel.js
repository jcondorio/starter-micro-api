import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class horasHL extends Model {}
horasHL.init({
    idHL: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  horasHL: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'HL',
  tableName: 'hL',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default horasHL;
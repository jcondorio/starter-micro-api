import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class Sumilla extends Model {}
Sumilla.init({
  idSum: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NomSum: {
    type: DataTypes.STRING(225),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Sumilla',
  tableName: 'sumilla',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default Sumilla;
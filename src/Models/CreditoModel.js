import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class credito extends Model {}
credito.init({
    idCred: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  nomCred: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Credito',
  tableName: 'credito',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default credito;
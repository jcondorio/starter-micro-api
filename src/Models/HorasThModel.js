import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class horasTH extends Model {}
horasTH.init({
    idTH: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  horasTH: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'TH',
  tableName: 'tH',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default horasTH;
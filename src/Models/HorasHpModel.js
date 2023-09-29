import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class horasHP extends Model {}
horasHP.init({
    idHP: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  horasHP: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'HP',
  tableName: 'hP',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default horasHP;
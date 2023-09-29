import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class ciclo extends Model {}
ciclo.init({
    idCiclo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  nomCiclo: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Ciclo',
  tableName: 'ciclo',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default ciclo;
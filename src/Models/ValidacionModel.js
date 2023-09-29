import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class Validacion extends Model {}
Validacion.init({
  idVal: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomVal: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Validacion',
  tableName: 'validacion',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default Validacion;
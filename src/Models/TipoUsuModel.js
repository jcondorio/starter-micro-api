import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

class TipoUsuario extends Model {}
TipoUsuario.init({
  idTipoUsu: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NomTipoUsu: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'TipoUsuario',
  tableName: 'tipoUsuario',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario

export default TipoUsuario;
import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';
import Validacion from './ValidacionModel.js';
import DocResp from './DocRespModel.js';

class DetalleSilabu extends Model {}
DetalleSilabu.init({
  idDocResp: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idDocResp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idVal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DetalleSilabu',
  tableName: 'detalleSilabu',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});
// Definir relaciones entre modelos si es necesario
DetalleSilabu.belongsTo(DocResp, {
    foreignKey: 'idDocResp',
    targetKey: 'idDocResp',
    as: 'docResp',
});
DetalleSilabu.belongsTo(Validacion, {
    foreignKey: 'idVal',
    targetKey: 'idVal',
    as: 'validacion',
});
export default DetalleSilabu;
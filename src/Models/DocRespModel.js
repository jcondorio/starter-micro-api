import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';
import Usuario from './UsuarioModel.js';
import Sumilla from './SumillaModel.js';
import silabu from './SilabuModel.js';
import Validacion from "./ValidacionModel.js";

class DocResp extends Model {}
DocResp.init({
  idDocResp: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idSilabu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idSum: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUsu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idVal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DescDocResp: {
    type: DataTypes.STRING(5000),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DocResp',
  tableName: 'docResp',
  timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});

// Definir relaciones entre modelos si es necesario
DocResp.belongsTo(Usuario, {
    foreignKey: 'idUsu',
    targetKey: 'idUsu',
    as: 'usuario',
});
// En el modelo DocResp
silabu.hasOne(DocResp, {
  foreignKey: 'idSilabu',
  sourceKey: 'idSilabu',
  as: 'docResp',
});

DocResp.belongsTo(Sumilla, {
    foreignKey: 'idSum',
    targetKey: 'idSum',
    as: 'sumilla',
});
DocResp.belongsTo(Validacion, {
  foreignKey: 'idVal',
  targetKey: 'idVal',
  as: 'validacion',
});
export default DocResp;
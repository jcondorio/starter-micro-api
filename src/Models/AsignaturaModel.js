import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

import annio from './AnnioModel.js';
import TipoUsuario from './TipoUsuModel.js';

class Asignatura extends Model {}
Asignatura.init({
  idAsig: {
    type: DataTypes.STRING(8),
    autoIncrement: true,
    primaryKey: true,
  },
  idTipoUsu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nomDasaAsig: {
    type: DataTypes.STRING(8),
    allowNull: false,
  },
  nomAsig: {
    type: DataTypes.STRING(225),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Asignatura',
  tableName: 'asignatura',
  timestamps: false, 
});

Asignatura.belongsTo(TipoUsuario, {
  foreignKey: 'idTipoUsu',
  targetKey: 'idTipoUsu',
  as: 'tipoUsuario',
});


export default Asignatura;
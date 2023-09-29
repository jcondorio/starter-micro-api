// Importa las dependencias necesarias
import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

import Usuario from './UsuarioModel.js';
import Asignatura from './AsignaturaModel.js';
import ciclo from './CicloModel.js';
import credito from './CreditoModel.js';
import horasHL from './HorasHlModel.js';
import horasHP from './HorasHpModel.js';
import horasHT from './HorasHtModel.js';
import horasTH from './HorasThModel.js';
import annio from './AnnioModel.js';

// Define el modelo principal Usuario
class silabu extends Model { }

silabu.init({
    idSilabu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    idUsu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idAsig: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    idCiclo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idCred: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idHT: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    idHP: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    idHL: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    idTH: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    preReqSilabu: {
        type: DataTypes.STRING(255), 
        allowNull: false,
    },
    idAnnio: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Silabu',
    tableName: 'silabu',
    timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});

// Establece la relación con el modelo 
silabu.belongsTo(Usuario, {
    foreignKey: 'idUsu',
    targetKey: 'idUsu',
    as: 'usuario',
});
silabu.belongsTo(Asignatura, {
    foreignKey: 'idAsig',
    targetKey: 'idAsig',
    as: 'asignatura',
});
silabu.belongsTo(ciclo, {
    foreignKey: 'idCiclo',
    targetKey: 'idCiclo',
    as: 'ciclo',
});
silabu.belongsTo(credito, {
    foreignKey: 'idCred',
    targetKey: 'idCred',
    as: 'credito',
});

silabu.belongsTo(horasHL, {
    foreignKey: 'idHL',
    targetKey: 'idHL',
    as: 'horasHL',
});
silabu.belongsTo(horasHP, {
    foreignKey: 'idHP',
    targetKey: 'idHP',
    as: 'horasHP',
});
silabu.belongsTo(horasHT, {
    foreignKey: 'idHT',
    targetKey: 'idHT',
    as: 'horasHT',
});
silabu.belongsTo(horasTH, {
    foreignKey: 'idTH',
    targetKey: 'idTH',
    as: 'horasTH',
});
silabu.belongsTo(annio, {
    foreignKey: 'idAnnio',
    targetKey: 'idAnnio',
    as: 'annio',
});

// Exporta el modelo Usuario
export default silabu;
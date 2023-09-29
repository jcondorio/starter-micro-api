// Importa las dependencias necesarias
import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';
import TipoUsuario from './TipoUsuModel.js'; // Asegúrate de importar el modelo TipoUsuario correctamente


// Define el modelo principal Usuario
class Usuario extends Model { }

Usuario.init({
    idUsu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idTipoUsu: {
        type: DataTypes.INTEGER, // Cambia el tipo de datos a UUID para que coincida con el modelo TipoUsuario
        allowNull: false,
    },
    nomUsu: {
        type: DataTypes.STRING(225),
        allowNull: false,
    },
    // Otras columnas
    apUsu1: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apeUsu2: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    dniUsu: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    emailUsu: {
        type: DataTypes.STRING(225),
        allowNull: false,
    },
    passwordUsu: {
        type: DataTypes.STRING(225),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false, // Deshabilita las columnas 'createdAt' y 'updatedAt'
});

// Establece la relación con el modelo TipoUsuario
Usuario.belongsTo(TipoUsuario, {
    foreignKey: 'idTipoUsu',
    targetKey: 'idTipoUsu',
    as: 'tipoUsuario',
  });

// Exporta el modelo Usuario
export default Usuario;
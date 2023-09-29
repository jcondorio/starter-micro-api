//import TipoUsuario from '../Models/TipoUsuModels.js';
import bcrypt from "bcrypt";
import Usuario from '../Models/UsuarioModel.js';
import sequelize from "../Config/db.js";
import { Op } from "sequelize";

// Controlador para obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    await Usuario.sync()
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const crearUsuario = async (req, res) => {
  const { nomUsu, apUsu1, apeUsu2, dniUsu, emailUsu, passwordUsu, idTipoUsu } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordUsu, saltRounds);

    const nuevoUsuario = await Usuario.create({
      nomUsu,
      apUsu1,
      apeUsu2,
      dniUsu,
      emailUsu,
      passwordUsu: hashedPassword, 
      idTipoUsu,
    });

    res.json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear un usuario:', error);
    res.status(500).json({ error: 'Error al crear un usuario' });
  }
};



export const obtenerUsuariosPer = async (req, res) => {

  try {
    const result = await sequelize.query(`
    select * from usuario where idUsu not in (select usu.idUsu from usuario as usu 
      inner join docresp as doc on usu.idUsu=doc.idUsu 
      inner join silabu as sil on sil.idSilabu=doc.idSilabu where sil.idAsig=? and sil.idAnnio= ?);


    `, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [req.params.id,req.params.id2]
    });
    res.json(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const forgotPass =async (req,res) =>{
  try{
    const result = await sequelize.query(`select passwordUsu from usuario where idUsu=?`,
    {
      type: sequelize.QueryTypes.SELECT,
      replacements:[req.session.idUsu]
    });
    const passwordMatch = await bcrypt.compare(req.body.beforePass, result[0].passwordUsu);

    if(passwordMatch==true & req.body.password==req.body.confirmPassword){
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      const updateUsuario = await Usuario.update(
        { passwordUsu: hashedPassword },
        {
          where: { idUsu: req.session.idUsu },
        }
      );
      res.json(updateUsuario);
    }
    
  } catch(error){
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}
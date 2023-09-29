import sequelize from "../Config/db.js";
import Asignatura from "../Models/AsignaturaModel.js";
import SilabuModel from "../Models/SilabuModel.js";
import Usuario from "../Models/UsuarioModel.js";
import ciclo from "../Models/CicloModel.js";
import credito from "../Models/CreditoModel.js";
import horasTH from "../Models/HorasThModel.js";
import horasHL from "../Models/HorasHlModel.js";
import horasHP from "../Models/HorasHpModel.js";
import horasHT from "../Models/HorasHtModel.js";

export const getSilabu = async (req, res) => {
  try {
    const result = await SilabuModel.findAll(); // Utiliza el método findAll() para obtener todos los registros de la tabla Asignatura
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const postSilabu = async (req, res) => {
  try {

    // Crear un nuevo registro de Silabu utilizando el modelo de Sequelize
    const nuevoRegistro = await SilabuModel.create({
      idUsu: req.body.idUsu,
      idAsig: req.body.idAsig,
      idCiclo: req.body.idCiclo,
      idCred: req.body.idCred,
      idHT: req.body.idHT,
      idHP: req.body.idHP,
      idHL: req.body.idHL,
      idTH: req.body.idTH,
      preReqSilabu: req.body.preReqSilabu,
    });

    // Puedes acceder al ID del nuevo registro así:
    const nuevoId = nuevoRegistro.id;

    // Puedes obtener el nuevo registro recién insertado así:
    const registroInsertado = await SilabuModel.findByPk(nuevoId);

    res.json(registroInsertado);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getSilabuCicloAnnio = async (req, res) => {
  try {
    const result = await SilabuModel.findAll({
      attributes: [
        'idCiclo',
        [sequelize.fn('COUNT', sequelize.col('idCiclo')), 'cicloCount'],
      ],
      where: {
        idAnnio: req.params.id, 
      },
      group: ['idCiclo'],
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getSilabuCiclo = async (req, res) => {
  try {
    const result = await SilabuModel.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
        },
        {
          model: Asignatura, 
          as: 'asignatura',
        },
        {
          model: ciclo,
          as: 'ciclo', 
        },
        {
          model: credito, 
          as: 'credito',
        },
        {
          model: horasHT,
          as: 'horasHT', 
        },
        {
          model: horasHP,
          as: 'horasHP', 
        },
        {
          model: horasHL, 
          as: 'horasHL',
        },
        {
          model: horasTH,
          as: 'horasTH', 
        }
        // Puedes incluir otras tablas relacionadas aquí
      ],
      where: {
        idAnnio: req.params.idanio,
        idCiclo: req.params.idciclo,
      },
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getIdentSilabu = async (req, res) => {
  try {
    let result = [];
    console.log(req.paramas)
      result = await sequelize.query(`
      select asig.idAsig,asig.nomAsig, tp.NomTipoUsu, sil.preReqSilabu, ci.nomCiclo, TH.horasTH, HT.horasHT, HL.horasHL, HP.horasHP, a.nomAnnio, cred.nomCred, sil.idSilabu  from silabu as sil 
      inner join Annio as a on a.idAnnio=sil.idAnnio 
      inner join ciclo as ci on ci.idCiclo=sil.idCiclo
      inner join HT on HT.idHT=sil.idHT 
      inner join HP on HP.idHP=sil.idHP 
      inner join HL on HL.idHL=sil.idHL 
      inner join TH on TH.idTH=sil.idTH 
      inner join credito as cred on cred.idCred=sil.idCred 
      inner join Asignatura as asig on asig.idAsig=sil.idAsig 
      inner join tipousuario as tp on tp.idTipoUsu=asig.idTipoUsu
      where sil.idSilabu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id]
      });
      console.log(result)
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const getFundVal = async (req, res) => {
  try {
    let result = [];
    console.log(req.paramas)
      result = await sequelize.query(`
      select * from silabu as sil 
      inner join docresp as doc on doc.idSilabu=sil.idSilabu 
      where doc.idVal=4 and sil.idSilabu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id]
      });
      console.log(result)
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
import DocResp from "../Models/DocRespModel.js";
import silabu from "../Models/SilabuModel.js";
import sequelize from "../Config/db.js";
import { Op } from "sequelize";

export const getDocResp = async (req, res) => {
  try {
    let results = []
    if (req.session.idTipoUsu == 1) {
      results = await sequelize.query(`
      SELECT DISTINCT Silabu.*,asignatura.*,annio.*, CASE WHEN DocResp.idDocResp IS NOT NULL THEN 'Sí' ELSE 'No' END AS tieneArchivo
      FROM Silabu 
      LEFT JOIN DocResp ON Silabu.idSilabu = DocResp.idSilabu 
      inner join asignatura on asignatura.idAsig=Silabu.idAsig 
      inner join annio on Silabu.idAnnio=annio.idAnnio
      where Silabu.idAnnio=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [parseInt(req.params.id)]
      });
    }
    else {
      results = await sequelize.query(`
      SELECT DISTINCT Silabu.*,asignatura.*,annio.*, CASE WHEN DocResp.idDocResp IS NOT NULL THEN 'Sí' ELSE 'No' END AS tieneArchivo
      FROM Silabu 
      LEFT JOIN DocResp ON Silabu.idSilabu = DocResp.idSilabu 
      inner join asignatura on asignatura.idAsig=Silabu.idAsig 
      inner join annio on Silabu.idAnnio=annio.idAnnio
      where Silabu.idAnnio=? and asignatura.idTipoUsu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [parseInt(req.params.id), req.session.idTipoUsu]
      });
    }

    res.json(results);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

export const getAsigTareas = async (req, res) => {
  try {
    let result = [];
    if (req.session.idTipoUsu == 1) {
      result = await sequelize.query(`
      SELECT MAX(doc.idDocResp) AS idDocResp, MAX(doc.idSilabu) AS idSilabu, MAX(doc.idSum) AS idSum, usu.nomUsu, MAX(sil.idAsig) AS idAsig, MAX(usu.idTipoUsu) AS idTipoUsu 
      FROM docResp AS doc 
      INNER JOIN silabu AS sil ON sil.idSilabu = doc.idSilabu 
      INNER JOIN usuario AS usu ON usu.idUsu = doc.idUsu 
      WHERE sil.idAsig = ? AND sil.idAnnio = ? 
      GROUP BY usu.nomUsu;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id, req.params.id2]
      });
    }
    else {
      result = await sequelize.query(`
      SELECT MAX(doc.idDocResp) AS idDocResp, MAX(doc.idSilabu) AS idSilabu, MAX(doc.idSum) AS idSum, usu.nomUsu, MAX(sil.idAsig) AS idAsig, MAX(usu.idTipoUsu) AS idTipoUsu 
      FROM docResp AS doc 
      INNER JOIN silabu AS sil ON sil.idSilabu = doc.idSilabu 
      INNER JOIN usuario AS usu ON usu.idUsu = doc.idUsu 
      WHERE sil.idAsig = ? AND sil.idAnnio = ? 
      GROUP BY usu.nomUsu;

    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id, req.params.id2]
      });
    }

    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Algo salió mal',
      error: error.message
    });
  }
}

export const postDocResp = async (req, res) => {
  try {
    let newDocResp = [];
    const consult = await sequelize.query(`
      select * from silabu where idAsig= ? and idAnnio = ?
    `, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [req.body.idAsig, req.body.idAnnio]
    });

    const consult2 = await sequelize.query(`
      select count(idSum) as sumCount from sumilla;
    `, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [req.body.idAsig]
    });

    const sumCount = consult2[0].sumCount; // Obtén el valor de sumCount desde el resultado


    for (let i = 0; i < sumCount; i++) {
      newDocResp = await DocResp.create({
        idSilabu: consult[0].idSilabu,
        idSum: i + 1,
        idUsu: req.body.idUsu,
        idVal: 1,
        DescDocResp: "",
      });
    }

    const result = await sequelize.query(`
      SELECT * 
      FROM docResp
      INNER JOIN sumilla ON docResp.idSum = sumilla.idSum
      INNER JOIN silabu ON silabu.idSilabu = docResp.idSilabu
      INNER JOIN asignatura ON asignatura.idAsig = silabu.idAsig
      INNER JOIN usuario on usuario.idUsu=docResp.idUsu 
      WHERE docResp.idDocResp=?;
    `, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [newDocResp.idDocResp]
    });

    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};


export const getAsignaturaSilabu = async (req, res) => {
  try {
    let result = [];
    if (req.session.idTipoUsu == 1) {
      result = await sequelize.query(`
    select * from silabu inner join asignatura on silabu.idAsig=asignatura.idAsig ;
    `, {
        type: sequelize.QueryTypes.SELECT,
      });
    }
    else {
      result = await sequelize.query(`
       select * from silabu inner join asignatura on silabu.idAsig=asignatura.idAsig inner join tipoUsuario on asignatura.idTipoUsu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.session.idTipoUsu]
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const putDocResp = async (req, res) => {

  try {
    const consult = await sequelize.query(`
    select * from usuario where nomUsu=?
 `, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [req.body.nomUsu]
    });
    const result = await sequelize.query(`
       update docResp set idUsu = ? where idDocResp = ?;
    `, {
      type: sequelize.QueryTypes.UPDATE,
      replacements: [consult[0].idUsu, req.params.id]
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const deleteDocResp = async (req, res) => {
  try {
    const idToDelete = req.params.id;

    const result = await sequelize.query(`
    DELETE FROM docresp
    WHERE idUsu in (select idUsu FROM usuario where nomUsu= ?) AND idSilabu IN (
        SELECT idSilabu
        FROM silabu
        WHERE idAsig = ? and idAnnio= ?
    );
    `, {
      type: sequelize.QueryTypes.DELETE,
      replacements: [req.params.id2,req.params.id,req.params.id3]
    });

    if (result === 0) {
      return res.status(404).json({
        message: 'No se encontró ningún registro para eliminar.',
      });
    }

    res.json({
      message: 'Registro eliminado exitosamente.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Ocurrió un error al intentar eliminar el registro.',
    });
  }
};

export const getTareas = async (req, res) => {
  try {
    let result = [];
    if (req.session.idTipoUsu == 1) {
      result = await sequelize.query(`
      select * from docResp 
      inner join silabu on silabu.idSilabu=docResp.idSilabu 
      inner join asignatura on asignatura.idAsig=silabu.idAsig 
      inner join ciclo on ciclo.idCiclo=silabu.idCiclo 
      inner join HT on HT.idHT=silabu.idHT 
      inner join HP on HP.idHP=silabu.idHP 
      inner join HL on HL.idHL=silabu.idHL 
      inner join TH on TH.idTH=silabu.idTH  
      inner join credito on credito.idCred=silabu.idCred  
      inner join tipoUsuario on tipoUsuario.idTipoUsu=asignatura.idTipoUsu  
      where docResp.idUsu=? and silabu.idAnnio=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.session.idUsu,req.params.id]
      });
    }
    else {
      result = await sequelize.query(`
      select * from docResp 
      inner join silabu on silabu.idSilabu=docResp.idSilabu 
      inner join asignatura on asignatura.idAsig=silabu.idAsig 
      inner join ciclo on ciclo.idCiclo=silabu.idCiclo 
      inner join HT on HT.idHT=silabu.idHT 
      inner join HP on HP.idHP=silabu.idHP 
      inner join HL on HL.idHL=silabu.idHL 
      inner join TH on TH.idTH=silabu.idTH  
      inner join credito on credito.idCred=silabu.idCred  
      inner join tipoUsuario on tipoUsuario.idTipoUsu=asignatura.idTipoUsu  
      where docResp.idUsu=? and silabu.idAnnio=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.session.idUsu,req.params.id]
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const getTareasUser = async (req, res) => {
  try {
    let result = [];
    if (req.session.idTipoUsu == 1) {
      result = await sequelize.query(`
      select * from docResp inner join silabu on silabu.idSilabu=docResp.idSilabu 
      inner join asignatura on asignatura.idAsig=silabu.idAsig 
      inner join ciclo on ciclo.idCiclo=silabu.idCiclo 
      inner join validacion on validacion.idVal=docResp.idVal 
      inner join sumilla on sumilla.idSum=docResp.idSum 
      inner join HT on HT.idHT=silabu.idHT 
      inner join HP on HP.idHP=silabu.idHP 
      inner join HL on HL.idHL=silabu.idHL 
      inner join TH on TH.idTH=silabu.idTH  
      inner join credito on credito.idCred=silabu.idCred 
      inner join tipoUsuario on tipoUsuario.idTipoUsu=asignatura.idTipoUsu  
      where docResp.idUsu=? and silabu.idSilabu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.session.idUsu, req.params.id]
      });
    }
    else {
      
      result = await sequelize.query(`
      select * from docResp inner join silabu on silabu.idSilabu=docResp.idSilabu 
      inner join asignatura on asignatura.idAsig=silabu.idAsig 
      inner join ciclo on ciclo.idCiclo=silabu.idCiclo 
      inner join validacion on validacion.idVal=docResp.idVal 
      inner join sumilla on sumilla.idSum=docResp.idSum 
      inner join HT on HT.idHT=silabu.idHT 
      inner join HP on HP.idHP=silabu.idHP 
      inner join HL on HL.idHL=silabu.idHL 
      inner join TH on TH.idTH=silabu.idTH  
      inner join credito on credito.idCred=silabu.idCred  
      inner join tipoUsuario on tipoUsuario.idTipoUsu=asignatura.idTipoUsu  
      where docResp.idUsu=? and silabu.idSilabu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.session.idUsu, req.params.id]
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const putTareasUsu = async (req, res) => {
  try {
    if (req.body === null) {
      res.json({ message: "El arreglo es nulo, no se realiza ninguna acción." });
      return;
    }

    const numElements = req.body.length;
    let results = [];
    
    for (let i = 0; i < numElements; i++) { 
      if (req.body[i] === null) {
      } else {
        const result = await sequelize.query(
          `
          UPDATE docResp SET DescDocResp = ?, idVal = 2 WHERE idDocResp = ?;
          `,
          {
            type: sequelize.QueryTypes.UPDATE,
            replacements: [req.body[i].textaso, req.body[i].idDocResp]
          }
        );
        results.push(result);
      }
    }


    res.json(results);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const getSegimiento = async (req, res) => {
  try {
    let result = [];
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
      where asig.idAsig=? and sil.idAnnio=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id,req.params.id2]
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
export const getDocDet = async (req, res) => {
  try {
    let result = [];
    console.log(req.paramas)
      result = await sequelize.query(`
      select distinct usu.idUsu, usu.nomUsu from docresp as doc
      inner join validacion as val on doc.idVal=val.idVal
      inner join sumilla as sum  on doc.idSum=sum.idSum
      inner join usuario as usu on usu.idUsu=doc.idUsu
      where doc.idSilabu = ?
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

export const getSumDetUsu = async (req, res) => {
  try {
    let result = [];
    console.log(req.paramas)
      result = await sequelize.query(`
      select doc.DescDocResp, sum.nomSum, val.NomVal from docresp as doc
      inner join sumilla as sum on sum.idSum=doc.idSum  
      inner join validacion as val on doc.idVal=val.idVal 
      where idUsu=? and idSilabu=?;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id,req.params.id2]
      });
      console.log("resultados",result)
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getRevisionAdmin = async (req, res) => {
  try {
    let result = [];
    console.log(req.params)
      result = await sequelize.query(`
      SELECT DISTINCT
          asig.nomAsig,sil.idSilabu,
          CASE
              WHEN val.idVal IS NULL OR val.nomVal <> 'Aprobado' THEN 'Falta aprobación'
              ELSE 'Aprobado'
          END AS estadoRevision
      FROM
          silabu AS sil
      INNER JOIN
          asignatura AS asig ON asig.idAsig = sil.idAsig
      LEFT JOIN
          docresp AS doc ON doc.idSilabu = sil.idSilabu
      LEFT JOIN
          validacion AS val ON doc.idVal = val.idVal
      WHERE
		  sil.idAnnio = ?
          OR sil.idAnnio = ?
          and doc.idDocResp IS NULL;
    `, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [req.params.id,req.params.id]
      });
      console.log("resultados",result)
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
import sequelize from "../Config/db.js";

export const obtenerValidaciones = async (req, res) => {

  try {
    const result = await sequelize.query(`
      select NomVal,idVal from validacion;
      `, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};


export const putEvaluar = async (req, res) => {

  try {
    console.log("params", req.params)
    if (req.params.id3 == 4) {
      console.log("entro")
      await sequelize.query(`
        UPDATE docresp
        SET idVal = 5
        WHERE idSilabu=?;
      `, {
        type: sequelize.QueryTypes.UPDATE,
        replacements: [req.params.id2]
      });
    }
    console.log("salio")
    const result = await sequelize.query(`
      UPDATE docresp
      set idVal = ?
      where idSilabu = ? and idUsu = ?;
      `, {
      type: sequelize.QueryTypes.UPDATE,
      replacements: [req.params.id3, req.params.id2, req.params.id1]
    });
    res.json(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

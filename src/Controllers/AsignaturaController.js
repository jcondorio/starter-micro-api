import Asignatura from "../Models/AsignaturaModel.js";

export const getAsignatura = async (req, res) => {
  try {
    let result=[];
    if(req.session.idTipoUsu==1){
      result = await Asignatura.findAll(); 
    }
    else{
      result = await Asignatura.findAll({
        where: {
          idTipoUsu: req.session.idTipoUsu
        }
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

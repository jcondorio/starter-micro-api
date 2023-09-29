import CicloModel from "../Models/CicloModel.js";

export const getCiclo = async (req, res) => {
  try {
    const result = await CicloModel.findAll();
    /*const result = [{
        nombre:"para probar"
    }]*/
    res.json(result);
  } catch (error) {
    console.error("Error in getCiclo:", error); // Registro del error en la consola para fines de depuraci贸n

    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
      stack: error.stack, // Agregar el stack de la pila para obtener m谩s detalles sobre el error
    });
  }
};
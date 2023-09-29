import Annio from "../Models/AnnioModel.js";

export const getAnnio = async (req, res) => {
  try {
    const result = await Annio.findAll(); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
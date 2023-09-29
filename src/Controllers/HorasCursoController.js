import horasHL from "../Models/HorasHlModel.js";
import horasHP from "../Models/HorasHpModel.js";
import horasHT from "../Models/HorasHtModel.js";
import horasTH from "../Models/HorasThModel.js";

export const getHT = async (req, res) => {
  try {
    const result = await horasHT.findAll();
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getHP = async (req, res) => {
  try {
    const result = await horasHP.findAll();
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const getHL = async (req, res) => {
  try {
    const result = await horasHL.findAll();
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const getTH = async (req, res) => {
  try {
    const result = await horasTH.findAll();
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

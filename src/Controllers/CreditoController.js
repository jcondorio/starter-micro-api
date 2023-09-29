import credito from "../Models/CreditoModel.js";

export const getCredito = async (req, res) => {
  try {
    const result = await credito.findAll(); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
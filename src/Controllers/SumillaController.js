import sumilla from "../Models/SumillaModel.js";

export const getSumilla = async (req, res) => {
  try {
      const result = await sumilla.findAll(); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
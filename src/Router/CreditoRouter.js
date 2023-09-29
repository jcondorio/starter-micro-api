import { Router } from "express";
import  { getCredito }  from "../Controllers/CreditoController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/credito', getCredito);



export default router;
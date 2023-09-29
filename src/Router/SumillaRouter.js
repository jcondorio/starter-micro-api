import { Router } from "express";
import  { getSumilla }  from "../Controllers/SumillaController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/sumilla', getSumilla);



export default router;
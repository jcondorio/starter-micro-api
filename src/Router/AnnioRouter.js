import { Router } from "express";
import  { getAnnio }  from "../Controllers/AnnioController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/annio', getAnnio);



export default router;
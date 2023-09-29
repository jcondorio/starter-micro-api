import { Router } from "express";
import  { getCiclo }  from "../Controllers/CicloController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/ciclo', getCiclo);



export default router;
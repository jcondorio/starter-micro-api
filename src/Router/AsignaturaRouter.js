import { Router } from "express";
import  { getAsignatura }  from "../Controllers/AsignaturaController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/Asignatura', getAsignatura);



export default router;
import { Router } from "express";
import  { getHL,getHP,getHT,getTH }  from "../Controllers/HorasCursoController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/hl', getHL);
router.get('/hp', getHP);
router.get('/ht', getHT);
router.get('/th', getTH);



export default router;
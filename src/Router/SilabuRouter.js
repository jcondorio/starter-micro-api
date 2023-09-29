import { Router } from "express";
import  { getSilabu, postSilabu, getSilabuCicloAnnio, getSilabuCiclo, getIdentSilabu, getFundVal }  from "../Controllers/SilabuController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/silabu', getSilabu);
router.post("/registersilabu", postSilabu);
router.get("/silciannio/:id",getSilabuCicloAnnio);
router.get("/silabuciclo/:idanio/:idciclo",getSilabuCiclo);
router.get("/identsilabu/:id",getIdentSilabu);
router.get("/fundamentoVal/:id",getFundVal);
export default router;
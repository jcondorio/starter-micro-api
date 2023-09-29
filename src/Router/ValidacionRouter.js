import { Router } from "express";
import { obtenerValidaciones, putEvaluar } from "../Controllers/ValidacionController.js";
const router = Router();

router.get("/validacion",obtenerValidaciones);
router.put("/evaluar/:id1/:id2/:id3", putEvaluar);

export default router;
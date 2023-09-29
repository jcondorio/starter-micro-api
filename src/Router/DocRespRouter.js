import { Router } from "express";
import  { 
    getAsigTareas, 
    getDocResp, 
    postDocResp,
    getAsignaturaSilabu, 
    putDocResp, 
    deleteDocResp, 
    getTareas, 
    getTareasUser, 
    putTareasUsu, 
    getSegimiento, 
    getDocDet, 
    getSumDetUsu,
    getRevisionAdmin, 
}  from "../Controllers/DocRespController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/silabusumilla/:id', getDocResp);
router.post("/silabusumilla",postDocResp);
router.get("/asigtareas/:id/:id2",getAsigTareas);
router.get("/asigsilabu",getAsignaturaSilabu);
router.put("/docresp/:id",putDocResp);
router.delete("/docresp/:id/:id2/:id3",deleteDocResp);
router.get("/tareas/:id",getTareas);
router.get("/tareasuser/:id",getTareasUser);
router.put("/tareasuser",putTareasUsu);
router.get("/seguimiento/:id/:id2",getSegimiento);
router.get("/segudetalles/:id",getDocDet);
router.get("/sumilladetusu/:id/:id2",getSumDetUsu);
router.get("/revision/:id",getRevisionAdmin)
export default router;
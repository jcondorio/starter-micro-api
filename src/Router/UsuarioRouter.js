import { Router } from "express";
import  { obtenerUsuarios, crearUsuario, obtenerUsuariosPer, forgotPass }  from "../Controllers/UsuarioController.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/usuarioper/:id/:id2", obtenerUsuariosPer);
router.get('/usuario', obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post('/usuario', crearUsuario);
router.post("/forgotpass",forgotPass);



export default router;
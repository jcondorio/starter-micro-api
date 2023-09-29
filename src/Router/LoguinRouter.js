import express from 'express';
import { login, sign, logout } from '../Controllers/LoguinUsuarioController.js';

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', login);
router.get("/",sign);
router.post("/logout", logout);
export default router;
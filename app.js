//modulos necesarios importados de node_module
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import morgan from "morgan";
import http from "http";
//import fs from "fs";
//import https from "https";

import UsuariosRouter from "./src/Router/UsuarioRouter.js";
import LoguinRouter from "./src/Router/LoguinRouter.js";
import SilabuRouter from "./src/Router/SilabuRouter.js";
import AsignaturaRouter from "./src/Router/AsignaturaRouter.js";
import CreditoRouter from "./src/Router/CreditoRouter.js";
import CicloRouter from "./src/Router/CicloRouter.js";
import horasCursoRouter from "./src/Router/HoraCursoRouter.js";
import AnnioRouter from "./src/Router/AnnioRouter.js";
import DocRespRouter from "./src/Router/DocRespRouter.js";
import SumillaRouter from "./src/Router/SumillaRouter.js";
import ValidacionRouter from "./src/Router/ValidacionRouter.js";

//variables globales
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();


//puerto 
const port = process.env.PORT || 4000;

const app = express();



//manejamos errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const server = http.createServer(app);
//Middleware para referencias http seguimiento
app.use(morgan("dev"));

//Mdiddleware para los permisos con react
app.use(cors({
    origin: ["https://silabufront.onrender.com", "https://silabu.istsl.edu.pe","http://localhost:3000"],
    credentials: true,
    optionSuccessStatus: 200,
    Headers: true,
    exposedHeaders: 'Set-Cookie',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Content-Type',
        'Authorization'
    ]
}));

//Middleware para body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware para analizar cookies
app.use(cookieParser());
app.use(bodyParser.json());

// Middleware para la gestión de sesiones
app.use(session({
    secret: "MiCadenaSecreta123",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

//Rutas
app.use(UsuariosRouter);
app.use(LoguinRouter);
app.use(SilabuRouter);
app.use(AsignaturaRouter);
app.use(CreditoRouter);
app.use(CicloRouter);
app.use(horasCursoRouter);
app.use(AnnioRouter);
app.use(DocRespRouter);
app.use(SumillaRouter);
app.use(ValidacionRouter);

//Habilitacion del puerto



//server.listen();

server.listen(port, () => {    console.log(`listening on port ${port}`)});
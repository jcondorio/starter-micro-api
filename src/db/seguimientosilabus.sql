-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: seguimientosilabus
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `annio`
--

DROP TABLE IF EXISTS `annio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annio` (
  `idAnnio` int NOT NULL AUTO_INCREMENT,
  `nomAnnio` int DEFAULT NULL,
  PRIMARY KEY (`idAnnio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annio`
--

LOCK TABLES `annio` WRITE;
/*!40000 ALTER TABLE `annio` DISABLE KEYS */;
INSERT INTO `annio` VALUES (1,2018);
/*!40000 ALTER TABLE `annio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignatura` (
  `idAsig` varchar(8) NOT NULL,
  `idTipoUsu` int DEFAULT NULL,
  `idAnnio` int DEFAULT NULL,
  `nomAsig` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`idAsig`),
  KEY `idTipoUsu` (`idTipoUsu`),
  KEY `idAnnio` (`idAnnio`),
  CONSTRAINT `asignatura_ibfk_1` FOREIGN KEY (`idTipoUsu`) REFERENCES `tipousuario` (`idTipoUsu`),
  CONSTRAINT `asignatura_ibfk_2` FOREIGN KEY (`idAnnio`) REFERENCES `annio` (`idAnnio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignatura`
--

LOCK TABLES `asignatura` WRITE;
/*!40000 ALTER TABLE `asignatura` DISABLE KEYS */;
INSERT INTO `asignatura` VALUES ('IIS.0301',3,1,'TALLER DE TESIS II'),('IIS.0302',4,1,'PRACTICAS PRE PROFESIONALES'),('IIS.0303',4,1,'ROBÓTICA'),('IIS.0304',4,1,'ELECTIVO III'),('IIS.0305',4,1,'AUDITORÍA DE SISTEMAS'),('IIS.0306',4,1,'PROCESAMIENTO DE IMÁGENES'),('IIS.0311',2,1,'MATEMÁTICA'),('IIS.0312',2,1,'COMUNICACIÓN Y REDACCIÓN'),('IIS.0313',2,1,'METODOLOGÍA DEL TRABAJO UNIVERSITARIO'),('IIS.0314',2,1,'QUÍMICA'),('IIS.0315',2,1,'FUNDAMENTOS DE PROGRAMACIÓN'),('IIS.0316',2,1,'MATEMÁTICA DISCRETA I'),('IIS.0317',3,1,'PROGRAMACIÓN GRÁFICA'),('IIS.0321',2,1,'ECOLOGÍA Y AMBIENTE'),('IIS.0322',2,1,'REALIDAD NACIONAL E INTERNACIONAL'),('IIS.0323',2,1,'FILOSOFÍA, ÉTICA Y SOCIEDAD'),('IIS.0324',2,1,'MATEMÁTICA I'),('IIS.0325',2,1,'FÍSICA I'),('IIS.0326',2,1,'MATEMÁTICA DISCRETA II'),('IIS.0327',3,1,'PROGRAMACIÓN AVANZADA'),('IIS.0331',3,1,'TEORÍA GENERAL DE SISTEMAS'),('IIS.0332',3,1,'SISTEMAS ELÉCTRICOS Y ELECTRÓNICOS'),('IIS.0333',3,1,'ESTRUCTURA DE DATOS '),('IIS.0334',4,1,'ALGORITMOS Y PROGRAMACIÓN PARALELA'),('IIS.0335',3,1,'MATEMÁTICA II'),('IIS.0336',3,1,'ESTADÍSTICA Y PROBABILIDADES'),('IIS.0341',4,1,'ANÁLISIS DE SISTEMAS'),('IIS.0342',4,1,'SISTEMAS DIGITALES'),('IIS.0343',3,1,'MODELADO COMPUTACIONAL PARA INGENIERÍA'),('IIS.0344',3,1,'CONTABILIDAD, COSTOS Y PRESUPUESTOS'),('IIS.0345',3,1,'MATEMÁTICA III'),('IIS.0346',3,1,'INGENIERÍA ECONÓMICA'),('IIS.0351',4,1,'DISEÑO DE SISTEMAS'),('IIS.0352',4,1,'ARQUITECTURA DE COMPUTADORES'),('IIS.0353',4,1,'COMPILADORES Y TEORÍA DE LENGUAJES'),('IIS.0354',4,1,'BASE DE DATOS I'),('IIS.0355',3,1,'INVESTIGACIÓN OPERATIVA II'),('IIS.0361',4,1,'INGENIERÍA DE SOFTWARE I'),('IIS.0362',4,1,'REDES I'),('IIS.0363',4,1,'SISTEMAS OPERATIVOS'),('IIS.0364',4,1,'BASE DE DATOS II'),('IIS.0365',3,1,'INVESTIGACIÓN OPERATIVA II'),('IIS.0366',3,1,'LEGISLACIÓN INDUSTRIAL  E INFORMÁTICA'),('IIS.0371',4,1,'INGENIERIA DE SOFTWARE II'),('IIS.0372',4,1,'REDES II'),('IIS.0373',4,1,'SISTEMAS DE INFORMACIÓN'),('IIS.0374',4,1,'ANALITICA DE DATOS'),('IIS.0375',3,1,'DINÁMICA DE SISTEMAS'),('IIS.0376',3,1,'PROYECTOS DE TECNOLOGÍAS DE LA INFORMACIÓN'),('IIS.0381',4,1,'INGENIERÍA WEB Y APLICACIONES MÓVILES'),('IIS.0382',4,1,'ELECTIVO I'),('IIS.0383',3,1,'TALLER DE EMPRENDIMIENTO E INNOVACION'),('IIS.0384',3,1,'SIMULACIÓN DE SISTEMAS'),('IIS.0385',4,1,'REALIDAD VIRTUAL'),('IIS.0386',4,1,'SEGURIDAD INFORMÁTICA'),('IIS.0391',3,1,'TALLER DE TESIS I'),('IIS.0392',4,1,'ELECTIVO II'),('IIS.0393',4,1,'INTELIGENCIA ARTIFICIAL'),('IIS.0394',3,1,'GESTIÓN DE TECNOLOGÍAS DE LA INFORMACIÓN'),('IIS.0395',4,1,'SISTEMAS EXPERTOS'),('IIS.0396',3,1,'MÉTODOS CUANTITATIVOS PARA INVESTIGACIÓN');
/*!40000 ALTER TABLE `asignatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciclo` (
  `idCiclo` int NOT NULL AUTO_INCREMENT,
  `nomCiclo` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`idCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclo`
--

LOCK TABLES `ciclo` WRITE;
/*!40000 ALTER TABLE `ciclo` DISABLE KEYS */;
INSERT INTO `ciclo` VALUES (1,'I'),(2,'II'),(3,'III'),(4,'IV'),(5,'V'),(6,'VI'),(7,'VII'),(8,'VIII'),(9,'IX'),(10,'X');
/*!40000 ALTER TABLE `ciclo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credito`
--

DROP TABLE IF EXISTS `credito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credito` (
  `idCred` int NOT NULL AUTO_INCREMENT,
  `nomCred` int DEFAULT NULL,
  PRIMARY KEY (`idCred`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credito`
--

LOCK TABLES `credito` WRITE;
/*!40000 ALTER TABLE `credito` DISABLE KEYS */;
INSERT INTO `credito` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6);
/*!40000 ALTER TABLE `credito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallesilabu`
--

DROP TABLE IF EXISTS `detallesilabu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallesilabu` (
  `idDetSil` int NOT NULL AUTO_INCREMENT,
  `idUsu` int DEFAULT NULL,
  `idDocResp` int DEFAULT NULL,
  PRIMARY KEY (`idDetSil`),
  KEY `idUsu` (`idUsu`),
  KEY `idDocResp` (`idDocResp`),
  CONSTRAINT `detallesilabu_ibfk_1` FOREIGN KEY (`idUsu`) REFERENCES `usuario` (`idUsu`),
  CONSTRAINT `detallesilabu_ibfk_2` FOREIGN KEY (`idDocResp`) REFERENCES `docresp` (`idDocResp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallesilabu`
--

LOCK TABLES `detallesilabu` WRITE;
/*!40000 ALTER TABLE `detallesilabu` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallesilabu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docresp`
--

DROP TABLE IF EXISTS `docresp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docresp` (
  `idDocResp` int NOT NULL AUTO_INCREMENT,
  `idSilabu` int DEFAULT NULL,
  `idSum` int DEFAULT NULL,
  `idUsu` int DEFAULT NULL,
  PRIMARY KEY (`idDocResp`),
  KEY `idSilabu` (`idSilabu`),
  KEY `idSum` (`idSum`),
  KEY `idUsu` (`idUsu`),
  CONSTRAINT `docresp_ibfk_1` FOREIGN KEY (`idSilabu`) REFERENCES `silabu` (`idSilabu`),
  CONSTRAINT `docresp_ibfk_2` FOREIGN KEY (`idSum`) REFERENCES `sumilla` (`idSum`),
  CONSTRAINT `docresp_ibfk_3` FOREIGN KEY (`idUsu`) REFERENCES `usuario` (`idUsu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docresp`
--

LOCK TABLES `docresp` WRITE;
/*!40000 ALTER TABLE `docresp` DISABLE KEYS */;
/*!40000 ALTER TABLE `docresp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hl`
--

DROP TABLE IF EXISTS `hl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hl` (
  `idHL` int NOT NULL AUTO_INCREMENT,
  `horasHL` int DEFAULT NULL,
  PRIMARY KEY (`idHL`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hl`
--

LOCK TABLES `hl` WRITE;
/*!40000 ALTER TABLE `hl` DISABLE KEYS */;
INSERT INTO `hl` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6);
/*!40000 ALTER TABLE `hl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hp`
--

DROP TABLE IF EXISTS `hp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hp` (
  `idHP` int NOT NULL AUTO_INCREMENT,
  `horasHP` int DEFAULT NULL,
  PRIMARY KEY (`idHP`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hp`
--

LOCK TABLES `hp` WRITE;
/*!40000 ALTER TABLE `hp` DISABLE KEYS */;
INSERT INTO `hp` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6);
/*!40000 ALTER TABLE `hp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ht`
--

DROP TABLE IF EXISTS `ht`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ht` (
  `idHT` int NOT NULL AUTO_INCREMENT,
  `horasHT` int DEFAULT NULL,
  PRIMARY KEY (`idHT`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ht`
--

LOCK TABLES `ht` WRITE;
/*!40000 ALTER TABLE `ht` DISABLE KEYS */;
INSERT INTO `ht` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6);
/*!40000 ALTER TABLE `ht` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `silabu`
--

DROP TABLE IF EXISTS `silabu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `silabu` (
  `idSilabu` int NOT NULL AUTO_INCREMENT,
  `idUsu` int DEFAULT NULL,
  `idAsig` varchar(8) DEFAULT NULL,
  `idCiclo` int DEFAULT NULL,
  `idCred` int DEFAULT NULL,
  `idHT` int DEFAULT NULL,
  `idHP` int DEFAULT NULL,
  `idHL` int DEFAULT NULL,
  `idTH` int DEFAULT NULL,
  `preReqSilabu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSilabu`),
  KEY `idUsu` (`idUsu`),
  KEY `idAsig` (`idAsig`),
  KEY `idCiclo` (`idCiclo`),
  KEY `idCred` (`idCred`),
  KEY `idHT` (`idHT`),
  KEY `idHP` (`idHP`),
  KEY `idHL` (`idHL`),
  KEY `idTH` (`idTH`),
  CONSTRAINT `silabu_ibfk_1` FOREIGN KEY (`idUsu`) REFERENCES `usuario` (`idUsu`),
  CONSTRAINT `silabu_ibfk_2` FOREIGN KEY (`idAsig`) REFERENCES `asignatura` (`idAsig`),
  CONSTRAINT `silabu_ibfk_3` FOREIGN KEY (`idCiclo`) REFERENCES `ciclo` (`idCiclo`),
  CONSTRAINT `silabu_ibfk_4` FOREIGN KEY (`idCred`) REFERENCES `credito` (`idCred`),
  CONSTRAINT `silabu_ibfk_5` FOREIGN KEY (`idHT`) REFERENCES `ht` (`idHT`),
  CONSTRAINT `silabu_ibfk_6` FOREIGN KEY (`idHP`) REFERENCES `hp` (`idHP`),
  CONSTRAINT `silabu_ibfk_7` FOREIGN KEY (`idHL`) REFERENCES `hl` (`idHL`),
  CONSTRAINT `silabu_ibfk_8` FOREIGN KEY (`idTH`) REFERENCES `th` (`idTH`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `silabu`
--

LOCK TABLES `silabu` WRITE;
/*!40000 ALTER TABLE `silabu` DISABLE KEYS */;
INSERT INTO `silabu` VALUES (2,1,'IIS.0301',1,1,1,3,1,2,'IIS.0301'),(3,1,'IIS.0301',1,1,1,3,1,2,'IIS.0301');
/*!40000 ALTER TABLE `silabu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sumilla`
--

DROP TABLE IF EXISTS `sumilla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sumilla` (
  `idSum` int NOT NULL AUTO_INCREMENT,
  `NomSum` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`idSum`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sumilla`
--

LOCK TABLES `sumilla` WRITE;
/*!40000 ALTER TABLE `sumilla` DISABLE KEYS */;
INSERT INTO `sumilla` VALUES (1,'NATURALEZA Y PROPÓSITO DEL CURSO'),(2,'PROPÓSITO'),(3,'CONTENIDO GENERAL DEL CURSO'),(4,'COMPETENCIAS DE LA ASIGNATURA');
/*!40000 ALTER TABLE `sumilla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th`
--

DROP TABLE IF EXISTS `th`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `th` (
  `idTH` int NOT NULL AUTO_INCREMENT,
  `horasTH` int DEFAULT NULL,
  PRIMARY KEY (`idTH`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th`
--

LOCK TABLES `th` WRITE;
/*!40000 ALTER TABLE `th` DISABLE KEYS */;
INSERT INTO `th` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6);
/*!40000 ALTER TABLE `th` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuario` (
  `idTipoUsu` int NOT NULL AUTO_INCREMENT,
  `NomTipoUsu` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idTipoUsu`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
INSERT INTO `tipousuario` VALUES (1,'Presidente de la Comisíon'),(2,'Área de Estudios Generales'),(3,'Área de Estudios Específicos'),(4,'Área de Estudios de Especialidad');
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsu` int NOT NULL AUTO_INCREMENT,
  `idTipoUsu` int DEFAULT NULL,
  `nomUsu` varchar(225) DEFAULT NULL,
  `apUsu1` varchar(50) DEFAULT NULL,
  `apeUsu2` varchar(50) DEFAULT NULL,
  `dniUsu` varchar(8) DEFAULT NULL,
  `emailUsu` varchar(225) DEFAULT NULL,
  `passwordUsu` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`idUsu`),
  KEY `idTipoUsu` (`idTipoUsu`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idTipoUsu`) REFERENCES `tipousuario` (`idTipoUsu`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,1,'johan marcos','condori','orellana','72230547','johan@gmail.com','123');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-14 12:36:05

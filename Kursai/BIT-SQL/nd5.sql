CREATE DATABASE  IF NOT EXISTS `zmones` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `zmones`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: zmones
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `adresai`
--

DROP TABLE IF EXISTS `adresai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adresai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `zmones_id` int NOT NULL,
  `adresas` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  `miestas` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  `valstybe` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  `pasto_kodas` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_adresai_zmones_idx` (`zmones_id`),
  CONSTRAINT `fk_adresai_zmones` FOREIGN KEY (`zmones_id`) REFERENCES `zmones` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresai`
--

LOCK TABLES `adresai` WRITE;
/*!40000 ALTER TABLE `adresai` DISABLE KEYS */;
INSERT INTO `adresai` VALUES (1,1,'Gedimino 9','Vilnius','LT','LT-00001'),(2,1,'Laisves al. 4','Kaunas','LT','LT-45601'),(3,2,'Savanoriu 1','Vilnius','LT','LT-00100'),(4,2,'XXX','XXX','US','US-0000'),(5,4,'Salomejos 34-18','Vilnius','LT','LT-00123'),(6,5,'Zudermano 3-17','Klaipeda','LT','LT-00165'),(7,6,'Dituvos 3','Vilnius','LT','LT-00129'),(8,7,'Savanoriu 56-10','Vilnius','LT','LT-00141');
/*!40000 ALTER TABLE `adresai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kontaktai`
--

DROP TABLE IF EXISTS `kontaktai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kontaktai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `zmones_id` int NOT NULL,
  `tipas` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  `reiksme` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_kontaktai_zmones_idx` (`zmones_id`),
  CONSTRAINT `fk_kontaktai_zmones` FOREIGN KEY (`zmones_id`) REFERENCES `zmones` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kontaktai`
--

LOCK TABLES `kontaktai` WRITE;
/*!40000 ALTER TABLE `kontaktai` DISABLE KEYS */;
INSERT INTO `kontaktai` VALUES (1,1,'email','jonas@gmail.com'),(2,1,'mob','+37069920001'),(3,2,'email','petras@gmail.com'),(4,2,'mob','+37069800001'),(5,2,'darbo','4515185'),(6,3,'mob','+3706720001'),(7,4,'email','zigmas@gmail.com'),(8,5,'email','anupras@gmail.com'),(9,6,'email','maryte@gmail.com'),(10,7,'email','rasa@gmail.com');
/*!40000 ALTER TABLE `kontaktai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zmones`
--

DROP TABLE IF EXISTS `zmones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zmones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vardas` varchar(225) COLLATE utf8_bin NOT NULL,
  `pavarde` varchar(225) COLLATE utf8_bin NOT NULL,
  `gim_data` date DEFAULT NULL,
  `alga` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zmones`
--

LOCK TABLES `zmones` WRITE;
/*!40000 ALTER TABLE `zmones` DISABLE KEYS */;
INSERT INTO `zmones` VALUES (1,'Jonas','Jonaitis','1999-01-01',1234.45),(2,'Petras','Petraitis','1970-01-01',5000.00),(3,'Antanas','Antanaitis','1980-05-03',234.41),(4,'Zigmas','Zigmaitis','2000-01-01',750.00),(5,'Anupras','Anupraitis','0201-01-01',1500.00),(6,'Maryte','Maraite','1985-01-01',2000.00),(7,'Rasa','Rasaite','1981-01-01',3000.00);
/*!40000 ALTER TABLE `zmones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 10:46:47

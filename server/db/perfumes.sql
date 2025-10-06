-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: sva_xxxx
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `perfumes`
--

DROP TABLE IF EXISTS `perfumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfumes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `gender` enum('male','female','unisex') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `volume_ml` int NOT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `description` text,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfumes`
--

LOCK TABLES `perfumes` WRITE;
/*!40000 ALTER TABLE `perfumes` DISABLE KEYS */;
INSERT INTO `perfumes` VALUES (1,'Sauvage','Dior','male',45000.00,100,15,'Свежий древесный аромат с бергамотом и амброксаном.','sauvage.jpg','2025-10-06 16:19:07'),(2,'Coco Mademoiselle','Chanel','female',52000.00,100,10,'Изысканный цветочный аромат с нотами апельсина и жасмина.','coco.jpg','2025-10-06 16:19:07'),(3,'Aventus','Creed','unisex',69000.00,100,5,'Фруктово-древесный аромат с бергамотом и ананасом.','aventus.jpg','2025-10-06 16:19:07'),(4,'Black Opium','YSL','female',48000.00,90,9,'Сладкий аромат с кофе, ванилью и белыми цветами.','black_opium.jpg','2025-10-06 16:19:07'),(5,'Bleu de Chanel','Chanel','male',55000.00,100,7,'Глубокий аромат с цитрусами, ладаном и сандалом.','bleu.jpg','2025-10-06 16:19:07'),(6,'Ombre Leather','Tom Ford','unisex',60000.00,100,6,'Кожаный аромат с жасмином и кардамоном.','ombre.jpg','2025-10-06 16:19:07'),(7,'Si','Armani','female',43000.00,80,12,'Аромат с ванилью, розой и пачули.','si.jpg','2025-10-06 16:19:07'),(8,'Eros','Versace','male',41000.00,100,10,'Свежий и страстный аромат с мятой и лимоном.','eros.jpg','2025-10-06 16:19:07'),(9,'Scandal','Jean Paul Gaultier','female',47000.00,80,8,'Медовый цветочный аромат с гарденией и апельсином.','scandal.jpg','2025-10-06 16:19:07'),(10,'The One','Dolce & Gabbana','male',49000.00,100,11,'Теплый табачный аромат с янтарём и кардамоном.','the_one.jpg','2025-10-06 16:19:07'),(11,'Gucci Bloom','Gucci','female',46000.00,75,7,'Цветочный аромат с жасмином и туберозой.','bloom.jpg','2025-10-06 16:19:07'),(12,'Burberry Her','Burberry','female',44000.00,100,9,'Фруктовый аромат с клубникой и ванилью.','her.jpg','2025-10-06 16:19:07'),(13,'Explorer','Montblanc','male',42000.00,100,10,'Древесный аромат с бергамотом и пачули.','explorer.jpg','2025-10-06 16:19:07'),(14,'Jazz Club','Maison Margiela','male',61000.00,100,5,'Тёплый аромат с ромом, табаком и ванилью.','jazz_club.jpg','2025-10-06 16:19:07'),(15,'For Her','Narciso Rodriguez','female',46000.00,90,8,'Мускусный аромат с розой и амброй.','for_her.jpg','2025-10-06 16:19:07'),(16,'Alien','Mugler','female',49000.00,100,6,'Жасмин и амбра создают загадочный образ.','alien.jpg','2025-10-06 16:19:07'),(17,'CK One','Calvin Klein','unisex',37000.00,100,15,'Свежий цитрусовый аромат, символ чистоты.','ck_one.jpg','2025-10-06 16:19:07'),(18,'Terre dHermes','Hermes','male',57000.00,100,4,'Древесно-цитрусовый аромат с ветивером.','terre.jpg','2025-10-06 16:19:07'),(19,'La Vie Est Belle','Lancome','female',52000.00,100,10,'Сладкий аромат с ирисом, ванилью и пралине.','vie.jpg','2025-10-06 16:19:07'),(20,'Gypsy Water','Byredo','unisex',64000.00,100,5,'Свежий древесный аромат с лимоном и можжевельником.','gypsy.jpg','2025-10-06 16:19:07');
/*!40000 ALTER TABLE `perfumes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-06 21:19:47

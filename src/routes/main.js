/*Requerimos Modulos Nativos*/
const express = require("express");
const router = express.Router();

//Requerimos los Controladores 
const controller = require("../controllers/mainController");

//Definimos las Rutas
router.get("/",controller.home);
router.get("/search",controller.search)

//Exportamos el Modulo 
module.exports = router;
/*Requerimos Modulos Nativos*/
const express = require("express");
//Guardamos la ejecucion de .Router en una constante 
const router = express.Router();
//Requerimos Controladores
const productsController = require("../controllers/productsController");
//Requerimos los Middlewares
const ingresoRuta = require("../middlewares/log");
const upload = require("../middlewares/uploadFile")

//Definimos las Rutas
router.get("/detalle/:id", ingresoRuta, productsController.details);
router.get("/crear", ingresoRuta, productsController.create);
router.get("/editar/:id", ingresoRuta, productsController.edit);
router.post("/crear", upload.single("images"), productsController.store);
router.post("/editar/:id",upload.single("images"),productsController.toUpdate);
router.post("/borrar/:id",upload.single("images"),productsController.delete);

//Exportamos el Modulo
module.exports = router;


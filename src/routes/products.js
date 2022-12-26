const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const ingresoRuta = require("../middlewares/log");
const upload = require("../middlewares/uploadFile")



router.get("/detalle/:id", ingresoRuta, productsController.details);
router.get("/crear", ingresoRuta, productsController.create);
router.get("/editar/:id", ingresoRuta, productsController.edit);
router.post("/crear", upload.single("images"), productsController.store);
router.post("/editar/:id",ingresoRuta,productsController.toUpdate);

module.exports = router;


/*app.get("/productos/:id",function (req,res) {
    res.send("Los id de los productos estan aqui" + " " +req.params.id)
})*/

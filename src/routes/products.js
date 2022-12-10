const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const ingresoRuta = require("../middlewares/log")

router.get("/",ingresoRuta,productsController.list);
router.get("/detalle",ingresoRuta,productsController.details);
router.get("/crear",ingresoRuta,productsController.create);
router.get("/editar",ingresoRuta,productsController.edit);

module.exports = router;


/*app.get("/productos/:id",function (req,res) {
    res.send("Los id de los productos estan aqui" + " " +req.params.id)
})*/

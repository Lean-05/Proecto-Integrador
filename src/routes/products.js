const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");


router.get("/",productsController.list);
router.get("/detalle",productsController.details);
router.get("/crear",productsController.create);
router.get("/editar",productsController.edit);

module.exports = router;


/*app.get("/productos/:id",function (req,res) {
    res.send("Los id de los productos estan aqui" + " " +req.params.id)
})*/

//Requerimos Modulos Nativos
const path = require("path");
const fs = require("fs");

//Almacena la Ruta del archivo Txt
const rutatxt = path.resolve(__dirname,"../../Rutas-Ingresadas.txt");

//Exporta el modulo, el cual escribi la ruta donde ingreso el Usuario
module.exports = function (req,res,next) {
    let ruta = req.originalUrl;
    fs.appendFileSync(rutatxt,ruta + "\n","utf-8")
    next();
}
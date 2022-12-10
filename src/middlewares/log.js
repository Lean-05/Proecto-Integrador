const path = require("path");
const fs = require("fs");

const rutatxt = path.resolve(__dirname,"../../Rutas-Ingresadas.txt")

module.exports = function (req,res,next) {
    let ruta = req.originalUrl;
    fs.appendFileSync(rutatxt,ruta,"utf-8")
    next();
}
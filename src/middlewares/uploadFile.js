//Requerimos el Modulo Nativo
const path = require("path");
//Requerimos el Modulo de Terceros
const multer = require("multer");

//El control de almacenamiento 
const storage = multer.diskStorage({
    //El destino donde se almacenaran las imagenes
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    //El nombre que tendra el archivo
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now() + fileExtension;
        cb(null, randomName);
    }
});

const upload = multer({
    storage: storage,
    //Controla que Archivos son aceptados
    fileFilter: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        if (![".jpg", ".png", ".gif"].includes(fileExtension)) {
            return cb(null, false);
        }
        cb(null, true);
    }
});

//Exporta el Modulo
module.exports = upload;
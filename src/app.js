//Requerimos los Modulos Nativos
const path = require("path");
const express = require("express");
//Guardamos la funcion que nos devuelve Express
const app = express();
//Requerimos el Modulo Propio
const dbConnect = require("./config/mongo");
/*Configuracion Express*/
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "../public")));

/*Configuracion para Poder Leer lo que viene por POST*/
app.use(express.urlencoded({ extended: true }));

/*Configuracion para Conectar a la base de Datos*/
dbConnect();

/*Sistema de Rutas*/
//Ruta de main-productos
const main = require("./routes/main");
app.use("/", main);
//Ruta de productos
const products = require("./routes/products");
app.use("/productos", products);
/*404 NotFound*/
app.use((req, res, next) => {
    res.render("404-page");
})
/*Inicia el Servidor*/
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
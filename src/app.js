const path = require("path");
const express = require("express");
const app = express();
const dbConnect = require("./config/mongo")
/*Configuracion Express*/
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "../public")))

/*Configuracion para Poder Leer lo que viene por POST*/
app.use(express.urlencoded({ extended: true }));


/*Sistema de Rutas*/

//Ruta de main-productos
const main = require("./routes/main")
app.use("/", main);
//Ruta de productos
const products = require("./routes/products");
app.use("/productos", products);


/*404 NotFound*/
app.use((req, res, next) => {
    res.render("404-page")
})

dbConnect();

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})
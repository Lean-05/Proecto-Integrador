//Requerimos el modelo de los Productos 
const Product = require("../data/models/Product");

const mainController = {
    //Home donde se encontraran todos los Productos
    home: async (req,res) => {
        const products = await Product.find()
        res.render("home",{productos: products})
    },
    //El buscador de los Productos
    search: async (req,res) => {
        const products = await Product.find();
        const buscador = req.query.buscador;
        const resultadoBuscador = products.filter((product) => product.name.includes(buscador) || product.name.toLowerCase().includes(buscador));
        res.render("products/search",{productEncontrado:resultadoBuscador})
    }
}
//Exportar el Modulo 
module.exports = mainController;
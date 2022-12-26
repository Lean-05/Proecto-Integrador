const Product = require("../data/models/Product");

const mainController = {
    home: async (req,res) => {
        const products = await Product.find()
        res.render("home",{productos: products})
    },
    search: (req,res) => {
        const buscador = req.query.buscador;
        const resultadoBuscador = products.filter((product) => product.name.includes(buscador) || product.name.toLowerCase().includes(buscador));
        res.render("products/search",{productEncontrado:resultadoBuscador})
    }
}

module.exports = mainController;
const path = require("path");
const fs = require("fs");

const rutaJson = path.resolve(__dirname,"../data/products.json");
const productsJson = fs.readFileSync(rutaJson,"utf-8");
const products = JSON.parse(productsJson);

const mainController = {
    home: (req,res) => {
        res.render("home",{productos:products});
    }
}

module.exports = mainController;
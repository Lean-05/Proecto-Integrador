const path = require("path");
const fs = require("fs");

const rutaJson = path.resolve(__dirname,"../data/products.json");
const productsJson = fs.readFileSync(rutaJson,"utf-8");
const products = JSON.parse(productsJson);

const productsController = {
    details: (req, res) => {
        let product = products.find(product =>{
            return product.id == req.params.id;
        })
        res.render("products/detail",{productos:product})
        res.redirect("/404-notfound")
    },
    create: (req, res) => {
        res.render("products/createProduct",{productos:products});
    },
    edit: (req, res) => {
        res.render("products/editProduct",{productos:products});
    }
}

module.exports = productsController;
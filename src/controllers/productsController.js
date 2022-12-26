const Product = require("../data/models/Product");

let productsController = {
    details: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render("products/detail",{productos:product})
    },
    create: (req, res) => {
        res.render("products/createProduct");
    },
    edit: async (req, res) => {
        const product = await Product.findById(req.params.id);
        console.log(product);
        res.render("products/editProduct", {producto: product});
    },
    store: async (req,res) =>{
        if (!req.file) {
            return res.send("La imagen tiene que ser obligartoria: .jpg")
        }
        await Product.create({...req.body, images: req.file.filename});
        return res.redirect("/");
    },
    toUpdate: async (req,res) =>{
        let productId = Product.findById({_id: req.params.id})
        let act=  await Product.findByIdAndUpdate(req.params.id,req.body)
        console.log(req.body);
        return res.redirect("/");
    },
    eliminate: (req,res) =>{

    }
}

module.exports = productsController;
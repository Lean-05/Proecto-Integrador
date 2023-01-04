//Requerimos el modelo de los Productos 
const Product = require("../data/models/Product");

let productsController = {
    //Muestra el detalle de los Productos
    details: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render("products/detail",{productos:product})
    },
    //Muestra la Vista donde se Crea un Producto 
    create: (req, res) => {
        res.render("products/createProduct");
    },
    //Al tocar el Boton Editar muestra la vista donde se edita un Producto, para luego poder ser editado
    edit: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render("products/editProduct", {producto: product});
    },
    //Almacena un Producto Nuevo
    store: async (req,res) =>{
        if (!req.file) {
            return res.send("La imagen tiene que ser obligartoria: .jpg")
        }
        await Product.create({...req.body, images: req.file.filename});
        return res.redirect("/");
    },
    //Actualiza el Producto
    toUpdate: async (req,res) =>{
        const productUpdate =  await Product.findByIdAndUpdate(req.params.id,req.body);
        return res.redirect("/");
    },
    //Elimina el Producto pero no de la Base de Datos
    delete: async (req,res) =>{
        const productDelete = await Product.deleteById(req.params.id);
        return res.redirect("/");
    }
}
//Exportamos el Modulo
module.exports = productsController;
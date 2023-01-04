//Requerimos Mongoose 
const { Schema, model } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

//Alcenamos en la variable el modelo que tendra cada Producto
const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images:{
        type:String,
        required: true
    }
})

//Para borrar un producto sin borrarlo
Product.plugin(mongooseDelete, {overrideMethods: "all"});

//Exportamos el Modulo
module.exports = model("Product", Product);


const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect("mongodb://127.0.0.1:27017/ProyectoIntegrador",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        function (err, res) {
            if (err) {
                console.log("Error de conexión");
            } else {
                console.log("Success connection");
            }
    });
}

module.exports = dbConnect;
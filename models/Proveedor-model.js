const {Schema , model} = require("mongoose");
const proveedorSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    }
})

module.exports = model("Proveedor" , proveedorSchema);
const mongoose = require("mongoose"); // importando el componente mogoose
const libroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    año: {
       type: Number,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Libro', libroSchema);

const mongoose = require('mongoose');

// Modelo del mongoose
const genero = new mongoose.Schema({
    nombre: {type: String, required: true, maxlength: 30 }
});

// Creo la clase
const Genero = mongoose.model('Genero', genero);

// Exportamos el modulo 
module.exports.Genero = Genero
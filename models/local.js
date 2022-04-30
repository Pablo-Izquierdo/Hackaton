const mongoose = require('mongoose');

const local = new mongoose.Schema({
    nombre: {type: String, required: true, maxlength: 80 },
    generos: [
        {type: mongoose.Types.ObjectId }
    ],
    str_generos: {type: String, required: true},
    direccion: {type: String, required: true, maxlength: 200 },
    coordenadas: [
        {type: Number, required: true}
    ]
});

// Creo la clase
const Local = mongoose.model('Local', local);

// Exportamos el modulo 
module.exports.Local = Local
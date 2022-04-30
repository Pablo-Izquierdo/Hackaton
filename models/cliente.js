
const mongoose = require('mongoose');

const cliente = new mongoose.Schema({
    username: {type: String, required: true, maxlength: 80 },
    genero: [
        {type: mongoose.Types.ObjectId }
    ],
    password: {type: String, required: true, maxlength: 20},
    edad: [
        {type: Number, required: true}
    ]
});

// Creo la clase
const Cliente = mongoose.model('Cliente', cliente);

// Exportamos el modulo 
module.exports.Cliente = Ciente


const express = require('express');

// Inicializo express con json
const app = express();
app.use(express.json());

// Anhadimos el fichero de rutas
const locals = require('./routes/locals');
app.use('/api/locales', locals);

// Puerto de conexión
const server = app.listen(8080);

// Exportar el fichero para que pueda ser usado
module.exports = server;
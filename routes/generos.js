const express = require('express');
const mongoose = require('mongoose');
const {Genero} = require('../models/genero');

// router
const router = express.Router();

router.get('/', async (req, res) => {

    // Retornamos todos los generos
    const generos = await Genero.find();

    res.send(locals).status(200);
});

router.post('/', async (req, res) => {
    
    // 

});

//*Funcion de validacion, entrada (genero) -> salida (genero o undefinned (404)) */

router.validate('/', async (req, res) => {

    const filters = req.query;
    // Retornamos todos los locales
    const generos = await Genero.find({});
    generoFiltered = generos
    const genero = await Genero.find({nombre:filters["genero"]}); //obtengo objeto genero, del genero en filtres
    
    code = 200
    if(genero == undefined){
        code = 404
    }
    
    res.send(genero).status(code); //SE PUEDE DEVOLVER ERROR 404???

});

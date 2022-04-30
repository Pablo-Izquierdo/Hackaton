const express = require('express');
const mongoose = require('mongoose');
const { Genero } = require('../models/genero');
const {Local} = require('../models/local');

// router
const router = express.Router();

router.get('/', async (req, res) => {

    const filters = req.query;
    // Retornamos todos los locales
    const locals = await Local.find({});

    // Filtro de locales
    let localsFiltered = locals;
    if (filters != undefined) {
        const genero = await Genero.find({nombre:filters["genero"]}); //obtengo objeto genero, del genero en filtres
        localsFiltered = localsFiltered.filter(local => local.genero.includes(genero._id)); ///api/local&genero="..."

    }

    // Respuesta
    res.send(localsFiltered).status(200);
});

router.get('/request:local', async (req, res) => {

    // Obtengo los locales
    const locals = await Local.find({});
});

router.post('/:id', async (req, res) => {
    
    // Parametros
    const desc = '';
    const generos = [];

    for (i=0; i<req.body.generos.maxlength(); i++) {
        // verificar el string de los generos
        const genero = Genero.validate(req.body.nombre);
        
        // añadir el id del genero al local
        txt_generos += req.body.generos[i].nombre;
    }

    const nLocal = new Local ({
        nombre: req.body.nombre,
        // cambiar a los objects
        generos: generos,
        description: txt_generos,
        direccion: req.body.direccion,
        coordenadas: req.body.coordenadas
    });

    await nLocal.save();
    res.status(201).send(nLocal);
});

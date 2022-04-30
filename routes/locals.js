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
    let localsFiltered = locals;
    if (filters != undefined) {
        const genero = await Genero.find({nombre:filters["genero"]}); //obtengo objeto genero, del genero en filtres
        localsFiltered = localsFiltered.filter(local => local.genero.includes(genero._id)); ///api/local&genero="..."

    }

    res.send(localsFiltered).status(200);
});



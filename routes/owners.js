
const express = require('express');
const mongoose = require('mongoose');
const { Owner } = require('../models/owner');
const {Local} = require('../models/local');

// router
const router = express.Router();

router.get('/', async (req, res) => {

    const filters = req.query;
    // Retornamos todos los locales
    const owner = await Owner.find({});
    let ownerFiltered = owner;
    if (filters != undefined) {
        ownerFiltered =  ownerFiltered.find({nombreEmpresa:filters["nombreEmpresa"]}); //obtengo objeto genero, del genero en filtres
    }

    res.send(ownerFiltered).status(200);
});

router.post('/', async (req, res) => {

    


});







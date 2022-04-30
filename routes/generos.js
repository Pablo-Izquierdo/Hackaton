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
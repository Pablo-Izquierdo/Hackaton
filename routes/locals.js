const express = require('express');
const mongoose = require('mongoose');
const {Local} = require('../models/local');

// router
const router = express.Router();

router.get('/', async (req, res) => {

    // Retornamos todos los locales
    const locals = await Local.find();

    res.send(locals).status(200);
});
const express = require('express');
const mongoose = require('mongoose');
const {Clientes, Cliente} = require('../models/cliente');

// router
const router = express.Router();

router.put('/', async (req, res) => {

    // Retornamos todos los generos
    //Buscar cliente
    const generos = await Genero.find();

    //guardar en cliente

    res.send().status(200);
});

//añadir cliente, editar cliente y dame cliente

router.post('/',async (req, res) => { //añadir cliente

    // New genero
    const cliente = new Cliente({
        nombre : req.body.nombre,
        generosfav : req.body.generos,
        password : req.body.password,
        edad : req.body.edad,
        mujer: req.body.mujer
    });

    await cliente.save();
    res.status(201).send(cliente);


});

router.put('/',async (req, res) => { //editar cliente ??

    // New genero
    const cliente = new Cliente({
        nombre : req.body.nombre,
        generosfav : req.body.generos,
        password : req.body.password,
        edad : req.body.edad,
        mujer: req.body.mujer
    });

    await cliente.save();
    res.status(201).send(cliente);


});

router.get('/:id', async (req, res) => { //dame cliente
    const currentUser = await User.findbyId(req.param.id);
    if(!currentUser) return res.status(404).send('NO user with that id was found')
    res.status(200).send(currentUser)
});






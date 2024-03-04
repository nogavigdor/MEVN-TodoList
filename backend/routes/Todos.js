const express = require('express');
const router = express.Router();
const Todos = require('../models/Todos');

//Get all todos route
router.get('/', async (req, res) => {
    try {
        const todos = await Todos.find();
        res.json(todos);
    } catch (err) {
        res.json({ message: err });
    }
});
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');

//Get all todos route
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.json({ message: err });
    }
});

//Post a todo route
router.post('/new', async (req, res) => {
    const todo = new Todo({
        
            todo: "wash the dishes",
            author: "Noga Vigdor"

        }
    );

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
});

//setting a GET route for a specific todo
router.get('/get/:id', async (req, res) => {
    try {
        const todo = await Todo.findById({_id: req.params.id});
        res.json(todo);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;
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

//Post a new todo route
router.post('/new', async (req, res) => {
    const newTodo = new Todo({
        
            todo: "wash the dishesssss",
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

//setting a DELETE route for a specific todo
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete({_id: req.params.id});
        res.json(deletedTodo);
    } catch (err) {
        res.json({ message: err });
    }
});

//setting a PUT route for a specific todo (update)
router.put('/update/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.updateOne(
         //   { _id: req.params.id },
         //   { $set: { todo: req.body.todo } }

         {
            author: "Mette Jespersen",
            title: "Read a book"
         }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;
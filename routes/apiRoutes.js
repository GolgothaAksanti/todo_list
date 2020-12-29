const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
});

// get single todo
router.get("/find/:id", (req, res) => {
    db.Todo.findAll({
        where: {
            id: req.params.id
        }
    }).then(todos => res.send(todos));
});

// post new todo
router.post('/new', (req, res) => {
    db.Todo.create({
        text: req.body.text
    }).then(submittedTodo => res.send(submittedTodo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("success"));
});

// edit todo
router.put('/edit', (req, res) => {
    db.Todo.update(
        {
            text: req.body.text
        }, 
        {
            where: { id: req.body.id }
        }
        ).then(() => res.send("success"));
});

module.exports = router;
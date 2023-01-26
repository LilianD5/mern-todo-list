const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow us to use content-type : application/json
app.use(express.json());

// Manage cors error
app.use(cors());

// Connect to DBs
mongoose.connect("mongodb://127.0.0.1:27017/mern-todo-list")
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

// Endpoints
const Task = require("./models/Tasks");

// Get all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();

    res.json(tasks);
})

// New task
app.post("/task/new", (req, res) => {
    const task = new Task({
        description: req.body.description
    });

    task.save();

    res.json(task);
})

// Delete task
app.delete("/task/delete/:id", async (req, res) => {
    const result = await Task.findByIdAndDelete(req.params.id);

    res.json(result);
})

// Toggle complete state
app.put("/task/complete/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);

    task.complete = !task.complete;

    task.save();

    res.json(task);
})

// Server listening on port XXXX
const port = 3001
app.listen(port, () => console.log(`Server started on port ${port}`));
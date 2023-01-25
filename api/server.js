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

app.listen(3001, () => console.log("Server started on port 3001"));
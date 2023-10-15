const express = require('express')
const Router = express.Router();

const CreateTodo = require("../controllers/CreateTodo")
const {GetAllTodos,GetTodo} = require("../controllers/GetTodos")
const UpdateTodo = require("../controllers/UpdateTodo");
const DeleteTodo = require("../controllers/DeleteTodo");

Router.post('/createTodo', CreateTodo);
Router.get('/getAllTodo', GetAllTodos);
Router.get('/getTodo/:id', GetTodo);
Router.put('/updateTodo/:id', UpdateTodo);
Router.delete('/deletetodo/:id', DeleteTodo);

module.exports = Router;
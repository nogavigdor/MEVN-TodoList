//mongodb+srv://nognog:<password>@cluster0.ui9b3ig.mongodb.net/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create express app
const app = express();

//Handle CORS and middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); //if using fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
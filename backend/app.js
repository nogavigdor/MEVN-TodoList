

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config(); // Load environment variables from .env file

//create express app
const app = express();

//Handle CORS and middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); //if using fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//database connection
const uri = process.env.DBHOST;
mongoose.connect(uri, {
    // useNewUrlParser: true, 
   //  useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Hello from Home Page');
    });

    //import routes
    const TodosRoute = require('./routes/Todos');

    //get all todos routs
    app.use('/todos', TodosRoute);

    //post a new todo route
    app.use('/todos/new', TodosRoute);

    


    //start server
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
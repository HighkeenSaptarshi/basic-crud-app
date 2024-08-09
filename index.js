require('dotenv').config();
const express = require('express');
const connectDB = require('./connection/index')

const homeRoute = require('./routes/home.route')

// console.log(process.env);
connectDB();

const app = express();
const port = process.env.PORT ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', homeRoute );


app.listen(port, ()=>{
    console.log(`CRUD server running on localhost ${port}`);
})
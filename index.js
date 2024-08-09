require('dotenv').config();
const express = require('express');

const homeRoute = require('./routes/home.route')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', homeRoute );


app.listen(3000, ()=>{
    console.log(`CRUD server running on localhost ${port}`);
})
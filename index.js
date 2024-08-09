require('dotenv').config();
const express = require('express');
const connectDB = require('./connection/index')
const cors = require('cors');

const homeRoute = require('./routes/home.route')

const port = process.env.PORT ;

connectDB();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', homeRoute );

app.on('error', (err)=>{
    console.log(err);
    throw err;
})

app.listen(port, ()=>{
    console.log(`CRUD server running on localhost ${port}`);
})
// express initialization
const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req, res) => {
    res.send('Server is successfully running')
})
app.get('/about',(req, res) => {
    res.send('This is about page')
})
app.get('/contact',(req, res) => {
    res.send('This is contact page')
})

const mongoose = require('./connection');

app.listen(port, () => {
    console.log('Server is running on port: 5000');
})
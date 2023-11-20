// express initialization
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const UserRouter = require('./Routers/UserRouter');
const ProductRouter = require('./Routers/ProductRouter')
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}))
// middleware
app.use('/user', UserRouter);
app.use('/product', ProductRouter);


// app.get('/',(req, res) => {
//     res.send('Server is successfully running')
// })
// app.get('/about',(req, res) => {
//     res.send('This is about page')
// })
// app.get('/contact',(req, res) => {
//     res.send('This is contact page')
// })

// const mongoose = require('./connection');

app.listen(port, () => {
    console.log('Server is running on port: 5000');
})
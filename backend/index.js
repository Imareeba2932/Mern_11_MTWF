// express initialization
const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req, res) => {
    res.send('Server is successfully running')
})

app.listen(port, () => {
    console.log('Server is running on port: 5000');
})
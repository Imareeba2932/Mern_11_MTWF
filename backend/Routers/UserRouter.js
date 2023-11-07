const express = require('express');
const router = express.Router();
const Model = require('../Models/UserModel')

router.post('/add', (req,res) => {
    console.log(req.body)
    res.send('Response from home page')
});
router.post('/delete',(req,res) => {
    res.send('data deleted')
});
module.exports = router;

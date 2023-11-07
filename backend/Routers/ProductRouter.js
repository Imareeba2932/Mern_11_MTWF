const express = require('express');
const router = express.Router();
const Model = require('../Models/ProductModel');

router.post('/add', (req,res) => {
    console.log(req.body)
    // Storing data to mongoDB
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
});
module.exports = router;

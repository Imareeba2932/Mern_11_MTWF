const express = require('express');
const router = express.Router();
const Model = require('../Models/ProductModel');

router.post('/add', (req,res) => {
    console.log(req.body)
    // Storing data to mongoDB
    // to add the data in database
    new Model(req.body).save()  
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
});

router.get('/getall',(req,res) => {
    // empty brackets will give all the data from the database
    Model.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
    
});
router.get('/getbyid/:id',(req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
})

module.exports = router;
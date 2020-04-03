const express = require ('express');
const router = express.Router();
const bookModel = require ('../models/books');

router.get('/api/books', function (req,res) {
    bookModel.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});

router.post('/api/books', function (req,res) {
    bookModel.create(req.body)
    .then(res => {
        res.json(res);
    })
    .catch(err => {
        console.log(err);
    });  
});







module.exports = router;
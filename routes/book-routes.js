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

router.put('/api/books/:_id', function (req, res) {
    console.log(req.params._id);
    res.json(req.params._id);
    bookModel.deleteOne({
        _id: req.params._id
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
})







module.exports = router;
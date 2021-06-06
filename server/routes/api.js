const express = require('express')
const Item = require('../model/marketDB')
const ItemData = require('../model/items.json')
const router = express.Router()


router.get('/items', function(req, res) {

    Item.find({}, function(err, items) {
        res.send(items)
    })
})




module.exports = router
const express = require('express')
const Item = require('../model/marketDB').Item
const User = require('../model/marketDB').User
const ItemData = require('../model/items.json')
const router = express.Router()


router.get('/items', function(req, res) {

    Item.find({}, function(err, items) {
        res.send(items)
    })
})

router.post('/user', function(req, res) {
    let user = new User(req.body)
    user.save()
    res.end()
})

// for (let doc of ItemData) {
//     let Items = new Item(doc)
// Items.save()
// }




module.exports = router
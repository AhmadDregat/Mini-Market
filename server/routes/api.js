const express = require('express')
const Item = require('../model/marketDB').Item
const User = require('../model/marketDB').User
const Cart = require('../model/marketDB').Cart
const ItemData = require('../model/items.json')
const router = express.Router()


router.get('/items', function(req, res) {

    Item.find({}, function(err, items) {
        res.send(items)
    })
})

router.get('/CartItems', function(req, res) {

    Cart.find({}, function(err, items) {
        res.send(items)
    })
})

router.post('/user', function(req, res) {
    let user = new User(req.body)
    user.save()
    res.end()
})
router.post('/itemcart', function(req, res) {
    let a = parseInt(req.body.count)

    Cart.find({ name: req.body.name }, function(err, param) {
        if (param.length >= 1) {
            a += param[0].count
            Cart.findOneAndUpdate({ name: req.body.name }, { count: a }, function() {
                res.end()
            })
        } else {
            let cart = new Cart(req.body)
            cart.save()
            res.end()
        }

    })

})

router.get('/checkuser', function(req, res) {
    let isExist = true
    const getName = req.query.name
    const getPassword = req.query.password
    User.find({ name: getName }, function(err, results) {
        results.forEach(e => {

            if (e.password != getPassword) {
                isExist = false
                res.send(isExist)
            }
        })
        res.send(isExist)

    })
})


router.put('/update', function(req, res) {
    const elementName = req.query.name
    const elementCount = req.query.count
    const elementPrice = req.query.price
    Cart.findOneAndUpdate({ name: elementName }, { count: elementCount, total: elementPrice * elementCount }, function(err, result) {
        Cart.find({}, function(err, items) {
            res.send(items)
        })
    })

})



// for (let doc of ItemData) {
//     let Items = new Item(doc)
// Items.save()
// }




module.exports = router
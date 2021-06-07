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
    let cart = new Cart(req.body)
    cart.save()
    res.end()
})

router.get('/checkuser', function(req, res) {
        let isExist = true
        let isAdmin = false
        const getName = req.query.name
        const getPassword = req.query.password
        User.find({ name: getName }, function(err, results) {
            results.forEach(e => {

                if (e.password != getPassword) {
                    isExist = false
                    res.send(isExist)
                } else if (e.isadmin === true) {
                    isAdmin = true
                }
            })
            res.send({ isExist: isExist, isAdmin: isAdmin })

        })
    })
    // for (let doc of ItemData) {
    //     let Items = new Item(doc)
    // Items.save()
    // }




module.exports = router
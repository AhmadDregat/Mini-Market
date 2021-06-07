const express = require('express')
const Item = require('../model/marketDB').Item
const User = require('../model/marketDB').User
const Cart = require('../model/marketDB').Cart
const Order = require('../model/marketDB').Order
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

router.get('/orderHistory', function(req, res) {

    Order.find({}, function(err, items) {
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
    let isExist = false
    let isAdmin = false
    const getName = req.query.name
    const getPassword = req.query.password
    User.find({ name: getName }, function(err, results) {
        if (results.length == 0) {
            res.send({ isExist: false, isAdmin: false })
        }
        results.forEach(e => {
            if (e.password != getPassword) {
                res.send({ isExist: false, isAdmin: false })
            } else if (e.password == getPassword && e.isadmin == false) {
                res.send({ isExist: true, isAdmin: false })
            } else if (e.password == getPassword && e.isadmin == true) {
                res.send({ isExist: true, isAdmin: true })
            }
        })


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
router.put('/setupItem', function(req, res) {
    const elementName = req.query.name
    const elementQuantity = parseInt(req.query.quantity)
    const elementPrice = parseInt(req.query.price)
    Item.findOneAndUpdate({ name: elementName }, { quantity: elementQuantity, price: elementPrice }, function(err, result) {
        Item.find({}, function(err, items) {
            res.send(items)
        })
    })

})


router.delete("/deleteItem/:itemName", function(req, res) {
    const itemName = req.params.itemName;
    Item.deleteMany({ name: itemName }, function(error) {
        if (error) {
            res.send(error)
        } else {
            Item.find({}, function(err, items) {
                res.send(items)
            })
        }
    })
})
router.delete("/deleteItemFromCart/:itemName", function(req, res) {
    const itemName = req.params.itemName;
    Cart.deleteMany({ name: itemName }).then(function() {
        Cart.find({}, function(err, items) {
            res.send(items)
        })
    })
})


router.delete("/deleteCart/:userName", function(req, res) {
    const userName = req.params.userName;
    Cart.deleteMany({ username: userName }, function(error) {
        if (error) {
            res.send(error)
        } else {
            Cart.find({ username: userName }, function(err, items) {
                res.send(items)
            })
        }

    })

})


router.post('/setnewitem', async function(req, res) {
    let newItem = new Item(req.body)
    await newItem.save()
    Item.find({}, function(err, items) {
        res.send(items)
    })
})


router.post('/saveOrderHistory', async function(req, res) {
        let newItem = new Order(req.body)
        await newItem.save()
        res.end()
    })
    // for (let doc of ItemData) {
    //     let Items = new Item(doc)
    // Items.save()
    // }




module.exports = router
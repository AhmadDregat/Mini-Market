const mongoose = require('mongoose')

const Schema = mongoose.Schema


const itemSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    photo_url: String
})

const usersSchema = new Schema({
    name: String,
    password: Number,
    phone: Number,
    adress: String,
    status: Boolean,
    isadmin: Boolean
})
const cartSchema = new Schema({

    name: String,
    count: Number,
    price: Number,
    users: {},
    total: Number

})

const Cart = mongoose.model("Cart", cartSchema)
const Item = mongoose.model("Item", itemSchema)
const User = mongoose.model("User", usersSchema)
module.exports = {
    Cart: Cart,
    Item: Item,
    User: User
}
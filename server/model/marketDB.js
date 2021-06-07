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
    total: Number,
    username: String


})

const orderhistorySchema = new Schema({
    username: String,
    totalprice: Number,
    date: Date



})

const Cart = mongoose.model("Cart", cartSchema)
const Item = mongoose.model("Item", itemSchema)
const User = mongoose.model("User", usersSchema)
const Order = mongoose.model("Order", orderhistorySchema)
module.exports = {
    Cart: Cart,
    Item: Item,
    User: User,
    Order: Order
}
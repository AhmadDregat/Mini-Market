const mongoose = require('mongoose')

const Schema = mongoose.Schema


const itemSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    photo_url: String
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item
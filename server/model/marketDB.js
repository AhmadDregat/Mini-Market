const mongoose = require('mongoose')

const Schema = mongoose.Schema


const marketSchema = new Schema({
    name: String,
    price: Number,
    quantity: String,
    itemimg: String
})

const market = mongoose.model("market", marketSchema)
module.exports = market
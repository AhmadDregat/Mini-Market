const data = require('./items')
const marketDB = require("./marketDB")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/MarketDB")

// for (let doc of data) {
//     let Item = new marketDB(doc)
//     Item.save()
// }
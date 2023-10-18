const mongoose = require('mongoose')
const userSchema = new mongoose.Schema()
const goodsSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    category: String,
    description: String,
    image: String
}, { timestamps: true })

const UserModel = mongoose.Model('userInfo', userSchema);
const goodsModel = mongoose.Model('goodInfo', goodsSchema)
module.exports = { UserModel, goodsModel };
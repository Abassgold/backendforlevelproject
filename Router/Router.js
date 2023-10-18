// const {product} = require('../Controller/controller')
const express = require('express')
const Route = express.Router()
Route.post('/products', (req, res)=>{
    console.log(req.body);
})

module.exports = {Route}
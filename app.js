const express = require('express')
const mongoose = require('mongoose')
const {Route} = require('./Router/Router')
require('dotenv').config()
const app = express()
const corse = require('cors')
app.use(corse())
app.use(express.urlencoded({extended:true, limit: '10mb'}))
app.use(express.json({limit: '10mb'}))
app.use('/user', Route)
mongoose.connect(process.env.URI).then(result=>{
    console.log(`database connected`);
})
.catch(err=>console.log(`database not connected ${err}`))
app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})
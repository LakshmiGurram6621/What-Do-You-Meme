const express = require('express')
const router =express.Router()
const quoteCards=require("../models/quoteCards")

router
    .get('/quoteCards',(req,res) => res.send(quoteCards))
    .post('/quoteCards',(req,res)) => {
         quoteCards.add(req.query.text)
         res.send(quoteCards.list.length)
    })
module.exports=router;    

const express = require('express')
const router =express.Router()
const quoteCards=require("../models/quoteCards")

router
     .use('/quoteCards',(req,res)=>{
         console.log({method:req.method,body:req.body});
         next();
     })
    .get('/quoteCards',(req,res,next) => console.log({method:req.method,query:req.query}))
    .post('/quoteCards',(req,res) => {
         quoteCards.add(req.body.text)
         res.send(quoteCards.list.length)
    })
module.exports=router;    

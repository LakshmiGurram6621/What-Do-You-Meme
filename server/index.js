console.log("Hello world");
const express = require('express')
const quoteCards=require("./Game/quoteCards").default;

const app = express()
const port = 3000

app
.get('/', (req, res) => res.send('Hello World!'))
.get('/Game/quoteCards',(req,res) => res.send(quoteCards));


app.listen(port, () => console.log(`Listening on http://loclahost:${port}`))
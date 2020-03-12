console.log("Hello world");
const express = require('express')
const router = express.Router();
const gameController =require('./controllers/game');

const app = express()
const port = 3000

app
.use(express.json())
.use(express.urlencoded({extended:true}))
.get('/', (req, res) => res.send('Hello World!'))
.use('/game',gameController)


app.listen(port, () => console.log(`Listening on http://loclahost:${port}`))
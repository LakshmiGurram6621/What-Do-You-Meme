console.log("Hello world");
const express = require('express')
const gameController =require('./controllers/game');

const app = express()
const port = 3000

app
.get('/', (req, res) => res.send('Hello World!'))
.use('/game',gameController)


app.listen(port, () => console.log(`Listening on http://loclahost:${port}`))
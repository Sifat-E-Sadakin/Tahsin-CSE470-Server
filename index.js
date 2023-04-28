const express = require('express')
const app = express()
const port = 3000;
var cors = require('cors')


const data = require('./data/data.json');
app.use(cors())

app.get('/', (req, res)=>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
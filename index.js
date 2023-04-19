const express = require('express')
const app = express()
const category = require('./data/category.json')
const cors = require('cors')
const port = 5000;


app.get('/', (req, res)=>{
    res.send('dragon news server is run on')
})

app.use(cors())

app.use('/category', (req, res)=>{
    res.send(category)
})

app.listen(port, ()=>{
    console.log(`dragon server is running on Port : ${port}`)
})
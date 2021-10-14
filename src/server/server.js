

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 5000

let records = [
    {
        recordName: "Staying Alive",
        artistName: "Bee Gees",
        description: "Listen to this when you are in trenches of WWI"
    },
    {
        recordName: "Staying Dead",
        artistName: "G-Bees",
        description: "When you don't want to come back to this world"
    },
] 

app.get('/api/records', (req, res) => {
    res.send(records)
})

app.listen(port, ()=> console.log(`server on port ${port}`))
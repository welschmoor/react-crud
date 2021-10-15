

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 5000

let records = [
    {
        id: 1,
        recordName: "Staying Alive",
        artistName: "Bee Gees",
        description: "Listen to this when you are in trenches of WWI"
    },
    {
        id: 2,
        recordName: "Staying Dead",
        artistName: "G-Bees",
        description: "When you don't want to come back to this world"
    },
] 

app.get('/api/records', (req, res) => {
    res.send(records)
})

app.post('/api/records', (req, res) => {
    const newRecord = {
        id: records.reduce((acc,each) => {
            return (each.id > acc ? each.id : acc)
        }, 0) +1
        ,
        ...req.body,
    }
    records.push(newRecord)
    res.send(newRecord) // it is good practice to return the element that we've created. This tells frontend about the ID.
})

app.listen(port, ()=> console.log(`server on port ${port}`))
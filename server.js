require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const {ROLLBAR_ACCESS_TOKEN} = process.env
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar

const foods = ['oranges', 'apples', 'bananas']

app.get('/', (req, res) => {
   
})

app.get('/api/foods', (req, res) => {
    
})

app.post('/api/foods', (req, res) => {
   let {name} = req.body

   const index = foods.findIndex(food => {
       return food === name
   })

   try {
       if (index === -1 && name !== '') {
           foods.push(name)
       } else if (name === ''){
       } else {
        
       }
   } catch (err) {
   }
})

app.delete('/api/foods/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    foods.splice(targetIndex, 1)
   
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))

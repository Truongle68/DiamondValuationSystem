require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const stripe = require('./routes/stripe')
const chat = require('./routes/chat')

app.use(express.static('public'))

const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (req,res)=> {
  res.send('Welcome to online shop api')
})

app.use('/api/stripe', stripe)

app.use('/api', chat)

app.listen(port, () => console.log(`Running on port ${port}`));
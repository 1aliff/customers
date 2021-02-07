import express from 'express'
import bodyParser from 'body-parser'
import customerRoutes from './routes/apiRoutes.js'

const app = express()
const port = 5000

app.use(bodyParser.json())

app.use('/customers', customerRoutes);

app.get('/', (req, res) => { 
  res.send('this is a response from homepage')
})

app.listen(port, () => console.log(`listening to ${port}`))
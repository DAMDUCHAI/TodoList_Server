import express from 'express'
import databaseService from './services/database.services'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express'
import databaseService from './services/database.services'
import { envConfig } from './constants/config'
const app = express()
const port = envConfig.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

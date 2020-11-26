const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const PORT = 3000

app.use(helmet())
app.use(cors())

app.get('/ping', (req, res) => res.json({msg: 'success'}))

app.get('/', (req, res) => {
  const result = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(req.ip);

  res.json({
    result: result,
    ip: req.ip
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
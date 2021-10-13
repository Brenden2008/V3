// install express with `npm install express` 
const express = require('express')
const app = express()
const port = 443

app.get('/', (req, res) => {
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
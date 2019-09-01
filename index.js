const express = require('express')

const app = express()
const port = process.env.PORT || 9090

app.use(express.static('public'))
app.use(express.json());

app.listen(port, () => console.log(
  `🌍 listening on port ${port}!`
))

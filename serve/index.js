const express = require('express')
const baseConfig = require('./route/baseConfig.js')
const app = express()
const port = 3002

app.use(express.json()) 
app.use('/baseConfig', baseConfig)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})


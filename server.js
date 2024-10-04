const express = require('express')
const app = express()
let port = 3000

const addrouter = require('./modele/operation')
app.use(addrouter)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
const express  = require("express")

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.end("Hello")
})

app.get('/books', (req, res) => {
    res.json({msg:"Welcome to my APIs"})
})

app.listen(PORT,  () => {
    console.log(`Server is running on PORT ${PORT}`)
})
const express = require('express')
const app = express()


require('dotenv').config()

//PORT
const PORT = process.env.PORT || 4000
app.get("/",(req,res)=>{

    res.send("hello there")
})

app.listen(PORT,()=>{console.log(`Working on ${PORT}`)})
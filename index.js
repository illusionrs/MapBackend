const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()


app.use(express.json())
//DATABASE

mongoose 
 .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

//PORT
const PORT = process.env.PORT || 4000
app.get("/",(req,res)=>{

    res.send("hello there")
})

app.listen(PORT,()=>{console.log(`Working on ${PORT}`)})
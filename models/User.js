const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

      username:{
        type:String,
        min: 4,
        max:20,
        required:true,
        unique: true
    },
    email:{
        type:String,
        max: 50,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        min:5
    }
    
}, {timestamps:true})

module.exports= mongoose.model('user',UserSchema)
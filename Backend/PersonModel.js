let mongoose= require('mongoose')
const PersonScheme= new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    age:Number,
    Gender:String,
    Salary:Number
})
module.exports= mongoose.model('abcmodel',PersonScheme,
'personCollection1')
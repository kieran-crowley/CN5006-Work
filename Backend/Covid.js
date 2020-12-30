let mongoose= require('mongoose')
const CovidScheme= new mongoose.Schema({
    County:{
     type:String,
     required:true
    },
    State:String,
    cases:String,
    death:String,
    date:String
})


module.exports= mongoose.model('abcmodel',CovidScheme,
'CovidCollection')
//this is the schema done
//books come from Here
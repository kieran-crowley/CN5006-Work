let mongoose= require('mongoose')
const CovidScheme= new mongoose.Schema({
    County:{
     type:String,
     required:true
    },
    State:String,
    cases:Number,
    death:String,
    date:String
})
//maybe need to fix the above. 


module.exports= mongoose.model('abcmodel',CovidScheme,
'CovidCollection')
//this is the schema done
//books come from Here
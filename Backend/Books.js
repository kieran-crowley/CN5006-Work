let mongoose= require('mongoose')
const BooksScheme= new mongoose.Schema({
    booktitle:{
     type:String,
     required:true
    },
    PubYear:Number,
    author:String,
    Topic:String,
    formate:String
})


module.exports= mongoose.model('abcmodel',BooksScheme,
'BookCollection')
//this is the schema done
//books come from Here
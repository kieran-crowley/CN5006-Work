let mongoose= require('mongoose')
const BooksScheme= new mongoose.Schema({
    bookname:{
     type:String,
     required:true
    },
    pubyear:Number,
    Title:String,
    Topic:String
})


module.exports= mongoose.model('abcmodel',BooksScheme,
'BookCollection')
//this is the schema done
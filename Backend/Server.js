var express = require("express")
let Books = require('./Books')
let mongodbConnected=require('./MongodbConnect')
const cors= require('cors');

var app =express()
var bodyparser=require("body-parser")
const { format } = require("path") 
const{ responce }= require("express");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false})) 

app.get('/',function(req,res){

})

app.get('/about',function (req,res){

    res.send("everything is running on one app") 
    Books.countDocuments().exec()
    .then(count=>{

    console.log("Total documents Count before addition :", count)

    }) .catch(err => { 
        console.error(err+"not working")
    })

})


app.get('/allbooks',function(req,res){
    Books.find(function(err, allbook) {
        if(err) {
           console.log(err);
        } else { 
            res.json(allbook);
        }
    });
});

app.post('/addbooks', function(req,res)
{
    console.log("Ref",req.body);
    let newbook= new Books(req.body);
    newbook.save()
    .then(todo => {
        res.status(200).json({'books': 'book added successfully'});
    })
    .catch(err =>{
        res.status(400).send('adding new book failed');
    });
})


/*app.get('/',function(req,res){ res.sendFile('Person.html', { root: __dirname });
})



app.get('/about',function (req,res){
res.send("This is a simple express application us ing mongodb express html and mongoose") 
Books.countDocuments().exec()
.then(count=>{
console.log("Total documents Count before addition :", count)
}) .catch(err => { 
    console.error(err)
})
})




app.post('/add', function(req,res){
Pname=req.body.empname
console.log('Pname',Pname)
PAge=req.body.Age 
PGender=req.body.gender
PSalary=req.body.salary

const doc1 = new PersonModel( 
    {
        name:Pname,age:33,Gender:PGender,Salary:PSalary} 
        )
        doc1.save(function(err,doc){
        if (err) return console.error(err) 
        else
        console.log("doc is added ",doc) 
        //res.send("Record is added"+doc) 
        res.send({
        'status':true, 
        'Status_Code':200,
        'requested at': req.localtime,
        'requrl':req.url,
        'request Method':req.method,
        'RecordAdded':doc});
    }

    )
})


app.post('/findperson', function(req,res){

PAge=req.body.Age
 console.log("Page",PAge)
  PersonModel.find({age:{$gte:PAge}})
         // find all users

        .sort({Salary: 1}) // sort ascending by firstName and salary only       

        .select('name Salary age')// Name and salary only

        .limit(10) // limit to 10 items

        .exec() // execute the query
        
        .then(docs => {
            console.log("Reteriving records ",docs)

res.send(docs)
})
.catch(err => {
    console.error(err)})
})


app.post('/delete', function(req,res){
    Pgender=req.body.gender 
    PersonModel.findOneAndDelete({Gender:Pgender }
).exec()
.then(docs=>{ 
    console.log("Deleted") 
console.log(docs); // Success
}).catch(function(error){
     console.log(error); // Failure
});
})


app.post('/update', function(req,res){
Pname=req.body.empname 
Pnewname=req.body.newname
PnewAge=req.body.newage
PersonModel.findOneAndUpdate({ name: Pname },{" $set":{name:Pnewname,age:PnewAge}}).exec()
.then(docs=>{
console.log("Update for what i get is ",Pname
,Pnewname,PnewAge) 
console.log(docs); // Success
}).catch(function(error){
console.log(error); // Failure 
});
})


app.post('/Count', function(req,res){
PersonModel.countDocuments().exec() // use without filter to find total number of documents.
.then(count=>{
res.send(bodyparser.count)
console.log("Count:", count)
})  .catch(err=>{console.error(err)
})
})





        
app.post('/find', function(req,res){

    PAge=req.body.Age
     console.log("Page",PAge)
      Books.find({age:{$lt:PAge}})
             // find all users
            .sort({Salary: 1}) // sort ascending by firstName and salary only       
            .select('name Salary age')// Name and salary only
            .limit(10) // limit to 10 items
            .exec() // execute the query
            .then(docs => {
                console.log("Reteriving records ",docs)
    res.send(docs)
    })
    .catch(err => {
        console.error(err)})
    })

*/
app.listen(5000,function(){
console.log("Server is running on the port 5000")
})

//server
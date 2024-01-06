const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json);


// post single todo
app.post("/todo",function(req,res){

});


// to see all todos
app.get("/todo" ,function(req,res){

});


// list of completed tasks
app.put("/completed",function(req,res){

});


app.listen(300,function(){
   console.log("server is running on port 3000");
});
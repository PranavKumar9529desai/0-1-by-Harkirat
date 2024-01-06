const express = require('express');
const jwt = require('jsonwebtoken');
const {todo} = require('./db.js');
const app = express();
const { UpdateTodo , CreateTodo } = require('./types');
const { Mongoose } = require('mongoose');
app.use(express.json());


// to see all todos
app.get("/todos" ,async function(req,res){
    const Todoall = await todo.find({});
    res.status(200).send({msg : Todoall});

});



// post single todo
app.post("/todo",async function(req,res){
    const CreatePayload = req.body;
    console.log(CreatePayload);
    const parsedPayload = CreateTodo.safeParse(CreatePayload);
    console.log(parsedPayload);
    if(!parsedPayload.success) {
        return res.status(400).json( {msg : "authentication faield"});
    }
    else{
    res.status(200).json({msg : "Task crated sucessfully"});
     };
    // create task in the inside the mongodb
    const title = req.body.title;
    const description = req.body.description;
    console.log(title,description);
    
    await todo.create({
        title : title,
        description : description ,
        completed : false ,
    }).
    then(()=>{
        console.log("tasks saved sucessfully");
    }).
    catch(()=>{console.log(err);})

});





// list of completed tasks
app.put("/completed",async function(req,res){
    const UpdatePayload = req.body;
    const parsedPayload = UpdateTodo.safeParse(UpdatePayload);
    if(!parsedPayload.success) {
        res.status(400).send( {msg : "authentication faild"});
    }
    // update the list inside the mongodb 
   const updateStatus = await todo.updateOne({_id : req.body.id } , {completed : true });
   res.send({msg : updateStatus});


});


app.listen(3000,function(req,res){
   console.log("server is running on port 3000");
});
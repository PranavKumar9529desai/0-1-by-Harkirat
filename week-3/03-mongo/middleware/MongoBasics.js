const express = require ('express');
const app =express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1/Myserver');
const Userschema = {
    name : String ,
    password : String ,
    age  : Number,
    expertise : String 

}
const Userdata = mongoose.model('new', Userschema);
// here "Pranav" is automatically converted into the pranavs 
// "pranavs" used as collection name 
// db name afer the url/dbs_name

const pranav = new Userdata ({name : "kumar" , password : "asdadad" , age : 19 , expertise : "coder"}) ;
pranav.save().then(()=>{console.log("saved the data")});

// mongodb+srv://AvwDA3zbhXlXwP6o:AvwDA3zbhXlXwP6o@cluster0.rpjurnn.mongodb.net/
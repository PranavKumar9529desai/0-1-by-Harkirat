const express = require('express');
const jwt= require('jsonwebtoken');
const secret = "pranav";
const app = express();


const users = [];

function createJWT(username){
    
    console.log(token);
}

function verifyJWT(username,token){
    try {
          jwt.verify(username,secret);
          return true;
          } catch (error) {
          return false; 
      }
  }

app.get("/users" , function(req,res){
     const recevied_token = req.headers.token;
     
     try {
        if(verifyJWT(recevied_token,secret)===false){
            res.status(404).send("this user does not exist in our database");
        };
        res.send(users);
        } catch (error) {
        console.log(error);
     }
})

app.post("/sign" ,function(req,res){
    const username = req.headers.email;
    const password = req.headers.password;
    try {
        const token = jwt.sign(username,secret);
        const user_name = jwt.decode(token)
        users.push(user_name);    
        res.send(token);

    } catch (error) {
        console.log(error);
    }
});

app.listen(3000,function(req,res){
    console.log("3000");
})
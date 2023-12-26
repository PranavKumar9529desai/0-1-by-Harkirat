/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// array to store all the new todos
let Todo = [{
  "title" : "pranav",
   "description" : "my name is pranav"
}];

// get route and render all todo to the user.
app.get("/todos" , function(req ,res ){
  // const title = req.body.title;
  // const description = re.body.description;
  res.status(200).send(Todo);
});


// post route , user can upload new todo in the todo list.
app.post("todos",function(req,res){
   let title = req.body.title;
   let description= req.body.description;
   console.log(title);
   console.log(description);
})

// app is runnig on the 3000 port .
app.listen(3000 , function(req,res){
  console.log("3000");
})

module.exports = app;
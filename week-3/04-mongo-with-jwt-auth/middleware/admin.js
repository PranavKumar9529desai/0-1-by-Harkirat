const { error } = require('console');
const { Admin } = require('../db/index.js');
const { rmSync } = require('fs');
const jwt = require('jsonwebtoken');
const secret = "pranavkumar";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.tokenstring;
    console.log(token);
        jwt.verify(token,secret,(error,decoded)=>{
            console.log(decoded);
            if(error) res.status(404).send({msg : "Unauthorized wrong token"});
            else {
                Admin.find({
                usernanme : decoded.usernanme 
            }).
            then((value)=>{
                if(!(value.length==0)) next();
                else res.status(500).send({msg :"admin name is not presient in the database"});
            });
        }
    })
    
}

module.exports = adminMiddleware;
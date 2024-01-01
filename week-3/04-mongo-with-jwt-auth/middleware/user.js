const secret = "pranavkumar";
const jwt = require('jsonwebtoken');
const {User} = require('../db/index')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.tokenstring;
    jwt.verify(token,secret,function(err,decoded){
        if(err) res.status(500).send({msg :"invalid token"});
        else{
           User.find({
            username : decoded.username
           })
            .then((value)=>{
                if(value) next();
                else res.status(200).send({msg : "user not found in userDb"})
            }) 
        }
    })
}

module.exports = userMiddleware;
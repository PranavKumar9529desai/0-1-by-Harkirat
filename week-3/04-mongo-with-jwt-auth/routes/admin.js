const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User , Admin  , Course} = require('../db');
const router = Router();
const jwt = require('jsonwebtoken');
const { stringify } = require("querystring");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username  = (req.body.username);
    const password  = req.body.password;
    console.log(username , password);

     await Admin.create({
        username : username ,
        password : password
    });
    res.json({msg : "admin is created"});
});

router.post('/signin', async (req, res) => {
    const username  = req.body.username;
    const password =  req.body.password;
    const payload = { username };
    const token = jwt.sign(payload, secret);

    const user = await Admin.findOne({ username: username });

    let responseStatus, responseMessage;

    if (user) {
        responseStatus = 200;
        responseMessage = { msg: "signIn successful", Token: token };
    } else {
        responseStatus = 400;
        responseMessage = { msg: "failed at signin, signup once again" };
    }

    res.status(responseStatus).send(responseMessage);
});  

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const CourseID  = req.body.CourseID ;
    const Title = req.body.Title;
    const Description = req.body.Description ;
    const  Price = req.body.Price ;
    const  Image_Url = req.body.Image_Url ;

    Course.create({
        CourseID : CourseID ,
        Title : Title ,
        Description : Description,
        Price : Price ,
        Image_Url : Image_Url
    }).
    then((value)=>{
        if(!(value.length===0)) res.status(200).send({msg : "course is sucessfully created"});
        else res.status(404).send({msg : "failed to create the couse"});
    })
     

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    await Course.find({})
    .then((value)=>{
       if(!(value.length==0)) res.status(222).send({course_availble : value});
       else res.status(404).status({msg : "No course found"}); 
})
});

module.exports = router;
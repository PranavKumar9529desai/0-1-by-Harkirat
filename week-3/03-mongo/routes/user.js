const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User , Course} = require("../db");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { CastError } = require("mongoose").Error;

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic 
    const username = req.body.username;
    const password = req.body.password;
    
    User.create({
        username : username,
        password : password
    })
    .then((value)=>{
     if(value){
        res.status(200).send({msg : "User created sucessfully"});
     }
     else{
<<<<<<< HEAD
         req.send(404).send("failed to create the user");
=======
         req.send(404).send("faled to create the user");
>>>>>>> 69caba6757c0adc1d688baffdf2e0ac6f358eea6
     }
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = (req.params.courseId);
    const username = req.headers.username;
    

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});


router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({});
    res.status(200).send(allcourses);
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});


module.exports = router
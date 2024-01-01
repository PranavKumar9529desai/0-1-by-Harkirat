const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Admin,Course} = require("../db");
const jwt = require('jsonwebtoken');
const { error } = require("console");
const secret = "pranavkumar";


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username  = (req.body.username);
    const password  = req.body.password;
    console.log(username , password);

     await User.create({
        username : username ,
        password : password
    });
    res.json({msg : "User is created"});

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username  = req.body.username ;
    const password =  req.body.password;
    const payload = {
        username,
    }
    const token = jwt.sign(payload,secret);
    await User.find({
        username : username
    }).
    then((value)=>{
        console.log(value);
        if(!(value.length===0)) res.status(200).send({msg : "signIn sucessfull " , Token:token});
        // console.log(value);
        else{
            res.status(400).send({msg : "failed at signin signup once again"});
        }
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    await Course.find({})
    .then((value)=>{
       if(!(value.length==0)) res.status(222).send({course_availble : value});
       else res.status(404).status({msg : "No course found"}); 
});
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne(
    { username },
    {
      $push: { purchasedCourses: courseId },
    }
  ).catch((e) => {
    console.log(e);
  });
  res.json({
    message: "Purchase complete!",
  });
});


router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({});
    res.status(200).send(allcourses);
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    try {
        const user = await User.findOne({ username });
        if (user) {
            const purchasedCourses = user.purchasedCourses;
            res.status(200).json({ purchasedCourses });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

module.exports = router
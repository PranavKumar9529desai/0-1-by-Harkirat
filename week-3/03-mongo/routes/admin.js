const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    // const isvalid = adminMiddleware();
    // console.log(isvalid);
     // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;
     // check if a user with this username already exists
     console.log(username ,password);
     await Admin.create({
         username: username,
         password: password
     })
 
     res.json({
         message: 'Admin created successfully'
     })
     
 });


router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const courseId = req.body.courseId;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    
    await Course.create({
        courseId : courseId ,
        title : title,
        description : description,
        price: price,
        image : image 
    })
    .then((value)=>{
        if(value){
            res.status(200).send({msg : "course created sucessfully"});
        }
        else {
            res.status(404).send({msg : "Access denied"});
        }
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
     const allcourse  = await Course.find({});
     res.status(200).send(allcourse)
});

module.exports = router;
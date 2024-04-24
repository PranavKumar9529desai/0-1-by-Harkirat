const mongoose = require('mongoose');
require('dotenv').config();


// Connect to MongoDB
mongoose.connect(process.env.MongoURL).then(()=>{console.log("database connected")}).catch((err)=>{console.log(err)});


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password :  String 
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: Number,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    CourseID  : Number ,
    Title : String,
    Description : String ,
    Price : Number ,
    Image_Url : String ,
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
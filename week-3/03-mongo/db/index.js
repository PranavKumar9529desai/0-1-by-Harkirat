const { link } = require('fs');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0/Myserver').then(()=>{console.log("database connected")}).catch((err)=>{console.log(err)});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String ,
    password : String,
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String ,
    password : String,
    purchasedCourses: [{
        type: Number,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId : Number ,
    title : String,
    description : String,
    price : Number,
    image : String, 

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Newcourse =mongoose.model('Newcourse' , CourseSchema); 

module.exports = {
    Admin,
    User,
    Course
}
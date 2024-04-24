import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// initializing the prisma client 
import express from "express";
import bodyparser from "body-parser";
const app = express();
app.use(bodyparser.json());
import {z} from "zod";


// the input validation 

const userSchema = z.object({
    username : z.string().min(4,"username Must be longer than 4 letters"),
    lastname : z.string().min(4,"lastname Must be longer than 4 letters"),
});

app.post("/signUp",async(req,res)=>{
    const isValidReq = userSchema.safeParse(req.body);
    console.log(isValidReq);
    if(!isValidReq.success){
        res.status(400).json({msg : "Req is not of right format"})
    }
    const {username,lastname} = req?.body;
    const  newUser = await prisma.user.create({
        data :{
            username,
            lastname
        }
    });
    if(newUser){
        res.status(200).json({
            msg : "User creted Sucessfully",
            UserCreated : newUser
        })
    }
    else{
        res.status(400).json({
            msg : "Error unable to create User"
        })
    }
    
})

app.post("/createTodo",async(req,res)=>{
    console.log("createTodo");
    const {title,description,userid} = req?.body;
    const newTodo = await prisma.todo.create({
       data : { title,description,userid}
    });
    if(newTodo){
        res.status(200).json({
            msg : "Todo creted Sucessfully",
            todoCreated : newTodo
        })
    }
    else{
        res.status(400).json({
            msg : "Error unable to create Todo"
        })
    }
    
});

app.get("/getTodos",async(req,res)=>{
    const {userid} = req?.body;
    const alltodos = await prisma.todo.findMany({
        where : {
            userid
        }
    });
    if(alltodos.length < 0){
        res.status(400).json({
            msg : "Error Occured"
        })
    }
    else{
        res.status(200).json({
            msg : "fetch is Successfull",
            alltodos : alltodos
        })
    } 
});

app.get("/getTodo/:id",async(req,res)=>{
    const id = req.params?.id;
    const userid = parseInt(id);
    console.log(userid);
    const theTodo = await prisma.todo.findMany({
        where :{userid}
    });
    if(theTodo.length > 0){
        res.status(200).json({
            msg : "here are the todos",
            todoCreated : theTodo
        })
    }
    else{
        res.status(400).json({
            msg : "Error unable to create Todo"
        })
    }
});

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
})

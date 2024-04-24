import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma  = new PrismaClient();

async function insertUser(username : string ,password : string ,firstname : string , lastname : string ){
    const res  = await prisma.user.create({
        data : {
            username ,
            password ,
            firstname ,
            lastname 
        },
    })
    console.log(res);
}

// insertUser('Nilesh' , 'NileshPassword' , 'Nilesh9822' , 'Lagad');

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
     where : {username : username},
     data : { firstname : firstName , lastname : lastName},
  });
   console.log(updateUser);
}
 
// updateUser("Nilesh", { firstName: "updatedUserName", lastName: "UpdatedlastName" });


async function GetUser(username : string){
    const res = await prisma.user.findUnique({
        where : {
            username : username ,
        }
    })
    console.log(res==null ? "User does not Exist " : "User is Found:");
}

// GetUser("Nilesh");


{/**Creatig the Todo functions in order to the fil the data*/}
interface todos{
    title  : string ,
    description : string ,
    done : boolean ,
    userid : number
}

async function InsertTodo (todos : todos){
    const res = await prisma.todo.create({
         data : {
            title : todos.title,
            description : todos.description,
            done : todos.done,
            userid : todos.userid
         }
    })
      console.log(res);
}

// InsertTodo({
//             title : "Java lectures",
//             description : "Because you need to do",
//             done : true,
//             userid : 1,
// })


async function GetTodo(id : number){
    const res = await prisma.todo.findUnique({
        where : {
            id : id 
        }
    });
    console.log(res);
}

// GetTodo(2);

async function GetUserAndTododetails(userid : number ){
     const userDetails= await prisma.todo.findMany({
        where : {
            userid : userid 
        },

       
     });


     const todoDetails = await prisma.todo.findMany({
        where : {
            userid : userid 
        }
     });
     
     console.log(userDetails);
    //  console.log(todoDetails);


};

// GetUserAndTododetails(2);


// better appraoch for GettingUserandTodoDeatials 
// using joins in the query;


async function GetUserAndTododetailsUsingJoins(userid : number ){
    const userDetails= await prisma.todo.findMany({
       where : {
           userid : userid 
       },

       select :{
           user : true,
           title : true ,
           description : true,
       }
    });
   console.log(userDetails);


};

GetUserAndTododetailsUsingJoins(1);
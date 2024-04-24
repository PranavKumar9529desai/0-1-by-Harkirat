"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname
            },
        });
        console.log(res);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { username: username },
            data: { firstname: firstName, lastname: lastName },
        });
        console.log(updateUser);
    });
}
// updateUser("Nilesh", { firstName: "updatedUserName", lastName: "UpdatedlastName" });
function GetUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                username: username,
            }
        });
        console.log(res == null ? "User does not Exist " : "User is Found:");
    });
}
// GetUser("Nilesh");
{ /**Creatig the Todo functions in order to the fil the data*/ }
function InsertTodo(todos) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: todos.title,
                description: todos.description,
                done: todos.done,
                userid: todos.userid
            }
        });
        console.log(res);
    });
}
// InsertTodo({
//             title : "Java lectures",
//             description : "Because you need to do",
//             done : true,
//             userid : 1,
// })
function GetTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findUnique({
            where: {
                id: id
            }
        });
        console.log(res);
    });
}
// GetTodo(2);
function GetUserAndTododetails(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDetails = yield prisma.todo.findMany({
            where: {
                userid: userid
            },
        });
        const todoDetails = yield prisma.todo.findMany({
            where: {
                userid: userid
            }
        });
        console.log(userDetails);
        //  console.log(todoDetails);
    });
}
;
// GetUserAndTododetails(2);
// better appraoch for GettingUserandTodoDeatials 
// using joins in the query;
function GetUserAndTododetailsUsingJoins(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDetails = yield prisma.todo.findMany({
            where: {
                userid: userid
            },
            select: {
                user: true,
                title: true,
                description: true,
            }
        });
        console.log(userDetails);
    });
}
;
GetUserAndTododetailsUsingJoins(1);

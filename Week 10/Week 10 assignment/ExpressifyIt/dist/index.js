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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// initializing the prisma client 
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const zod_1 = require("zod");
// the input validation 
const userSchema = zod_1.z.object({
    username: zod_1.z.string().min(4, "username Must be longer than 4 letters"),
    lastname: zod_1.z.string().min(4, "lastname Must be longer than 4 letters"),
});
app.post("/signUp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidReq = userSchema.safeParse(req.body);
    console.log(isValidReq);
    if (isValidReq.success == false) {
        res.status(400).json({ msg: "Req is not of right format" });
    }
    const { username, lastname } = req === null || req === void 0 ? void 0 : req.body;
    const newUser = yield prisma.user.create({
        data: {
            username,
            lastname
        }
    });
    if (newUser) {
        res.status(200).json({
            msg: "User creted Sucessfully",
            UserCreated: newUser
        });
    }
    else {
        res.status(400).json({
            msg: "Error unable to create User"
        });
    }
}));
app.post("/createTodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("createTodo");
    const { title, description, userid } = req === null || req === void 0 ? void 0 : req.body;
    const newTodo = yield prisma.todo.create({
        data: { title, description, userid }
    });
    if (newTodo) {
        res.status(200).json({
            msg: "Todo creted Sucessfully",
            todoCreated: newTodo
        });
    }
    else {
        res.status(400).json({
            msg: "Error unable to create Todo"
        });
    }
}));
app.get("/getTodos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req === null || req === void 0 ? void 0 : req.body;
    const alltodos = yield prisma.todo.findMany({
        where: {
            userid
        }
    });
    if (alltodos == null) {
        res.status(400).json({
            msg: "Error Occured"
        });
    }
    else {
        res.status(200).json({
            msg: "fetch is Successfull",
            alltodos: alltodos
        });
    }
}));
app.get("/getTodo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const userid = parseInt(id);
    console.log(userid);
    const theTodo = yield prisma.todo.findMany({
        where: { userid }
    });
    if (theTodo) {
        res.status(200).json({
            msg: "here are the todos",
            todoCreated: theTodo
        });
    }
    else {
        res.status(400).json({
            msg: "Error unable to create Todo"
        });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});

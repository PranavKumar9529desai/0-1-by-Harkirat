const { title } = require('process');
const z = require('zod');

const CreateTodo = z.object({
    title : z.string(),
    description : z.string(),
   
});


const UpdateTodo = z.object({
    id : z.string(),
})

module.exports = {
    CreateTodo : CreateTodo ,
    UpdateTodo : UpdateTodo ,
}
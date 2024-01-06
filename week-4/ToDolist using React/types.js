const { title } = require('process');
const z = require('zod');

const CreateTodo = z.object({
    title : z.String(),
    description : z.String(),
});


const UpdateTodo = z.object({
    id : z.Number(),
})
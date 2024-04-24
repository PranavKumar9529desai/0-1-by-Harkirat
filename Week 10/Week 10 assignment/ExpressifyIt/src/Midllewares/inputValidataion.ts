import {boolean, z} from "zod";

async function AuthMiddlerWare(req,res,next){
    const userSchema = z.object({
        username : z.string().min(4,"username Must be longer than 4 letters"),
        lastname : z.string().min(4,"lastname Must be longer than 4 letters"),
    });
    const isValid = userSchema.parse(req.bdoy);

    if(isValid){
        next();
    }
    else{
        res.status(400).json({
            msg : "Data is "
        })
    }
}
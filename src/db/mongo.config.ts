

// Here we will connect Mongoose

import { error } from "console";
import mongoose from "mongoose";


export function Connect(){

    mongoose.connect(process.env.MONGO_URI !,{
        tls:true
    })

    .then(()=>console.log("Database Connected Successfully"))
    .catch(()=>console.log("There is some error",error))
}
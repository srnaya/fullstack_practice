
import { Connect } from "@/db/mongo.config";
import { NextRequest,NextResponse } from "next/server";
import {registerSchema} from "@/validator/authSchema";
import vine, { errors } from '@vinejs/vine'
import errorReporter from "@/validator/errorReporter";
import bcrypt from 'bcryptjs';
import { Student } from "@/model/Student";

// for DB connection
Connect();

export async function POST(request:NextRequest){

    try{

        const body = await request.json();

       const validator = vine.compile(registerSchema);
       validator.errorReporter=()=>new errorReporter();
       const output= await validator.validate(body);
    //   check is email already exist
    const student = await Student.findOne({email:output.email});

    if(student){
        return NextResponse.json({
            status:400,
            errors:{
                email:"Email has already taken.Please use another email"
            }
        },{status:200})
    }else{
        //    Encrypt the password
    const salt = bcrypt.genSaltSync(10);
    output.password = bcrypt.hashSync(output.password,salt)
    await Student.create(output)
       return NextResponse.json({status:200,message:"Account created successfully.Please login to your account"},{status:200})

    }



    
    }catch(error){
 
        if (error instanceof errors.E_VALIDATION_ERROR) {
            
            return NextResponse.json(
                {status:400,errors:error.messages},
                {status:200}
            )
    }
   
    
}
}


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

   const salt =bcrypt.genSaltSync(10);
   const password=bcrypt.hashSync("123456",salt);
   await Student.create({
    email:"admin@gmail.com",
    password:password,
    name:"Admin",
    role:"Admin"
   });

   return NextResponse.json({status:200,message:"Admin created successfully"})
}

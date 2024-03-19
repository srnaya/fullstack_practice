import { Connect } from "@/db/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/validator/authSchema";
import vine, { errors } from '@vinejs/vine'
import errorReporter from "@/validator/errorReporter";
import bcrypt from 'bcryptjs';
import { Student } from "@/model/Student";


Connect();

export async function POST(request: NextRequest) {


    try {
        const body = await request.json();
        const validator = vine.compile(loginSchema);
        validator.errorReporter = () => new errorReporter();
        const output = await validator.validate(body);

        const student = await Student.findOne({email:output.email})
        if(student){
            const checkPassword = bcrypt.compareSync(output.password! ,student.password);
            if(checkPassword){
                return NextResponse.json({
                    status:200,
                    messsage:"Logged in Successfully"
                },{status:200})
            }
            return NextResponse.json({
                status:400,
                errors:{
                    email:"Please give correct Password"
                }
                
            },{status:200})

        }
        return NextResponse.json({
            status:400,
            errors:{
                email:"No account found with this email"
            }
        },{status:200})

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {

            return NextResponse.json(
                { status: 400, errors: error.messages },
                { status: 200 }
            )
        }


    }
}

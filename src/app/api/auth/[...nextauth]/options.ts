import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {Connect} from "@/db/mongo.config"
import { Student } from "@/model/Student";



export const authOptions: AuthOptions = {
    pages:{
        signIn:"/login",
    },
    providers: [
        CredentialsProvider({
            name: "Authentication",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter Your Email"
                },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                Connect();
                const student = await Student.findOne({email:credentials?.email})

                if (student) {
                    return student
                } else {
                    return null
                }
            }

        })
    ]
}
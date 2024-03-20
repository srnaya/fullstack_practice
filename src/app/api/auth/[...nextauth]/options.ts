import { AuthOptions, ISODateString, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {Connect} from "@/db/mongo.config"
import { Student } from "@/model/Student";
import GitHubProvider from "next-auth/providers/github"
import { JWT } from "next-auth/jwt";


export type CustomSession ={
    user?:CustomUser;
    expires:ISODateString
}

export type CustomUser ={
    id?:string|null;
    name?:string|null;
    email?:string|null;
    role?:string|null;
    avatar?:string|null;
}


export const authOptions: AuthOptions = {
    pages:{
        signIn:"/login",
    },
    callbacks:{
        async signIn({user,account,profile,email,credentials}){

            try{

                Connect();
                const studentUser = await Student.findOne({email:user.email})
                if(studentUser){
                    return true
                }

                await Student.create({email:user.email,name:user.name,role:"Student"});
                return true;

            }catch(error){
              console.log("Sign In error",error);
              return false;
            }
         
           
        },

        async jwt({token,user}:{token:JWT,user:CustomUser}) {
            if(user){
                user.role = user?.role ===null ? "Student" : user?.role
              token.user = user
            }
            return token;
        },
        async session({session,token,user}:{session:CustomSession,token:JWT,user:User}) {
            session.user = token.user as CustomUser
            return session;
        },

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

                console.log("The credentials and req info",credentials,req);

                Connect();
                const student = await Student.findOne({email:credentials?.email})

                if (student) {
                    return student
                } else {
                    return null
                }
            }

        }),

        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID!,
            clientSecret:process.env.GITHUB_CLIENT_SECRET!,
        })
    ]
}
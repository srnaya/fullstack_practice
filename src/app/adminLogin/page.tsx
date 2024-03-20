
"use client"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminImage from '../../../../public/admin-3d-illustration-icon-png.webp';
import Image from 'next/image';



export default function AdminLogin(){
    const router = useRouter();
    
    const [adminAuth,setAdminAuth] = useState({
        email:"",
        password:""
    })

    const handleSubmit =async(event:React.FormEvent)=>{
        event.preventDefault();
        const data = await signIn("credentials",{
            email:adminAuth.email,
            password:adminAuth.password,
            redirect:false
        })

        if(data?.status ===200){
            router.replace("/Admin")
        }

    }

    return(
        <div className="h-screen w-screen flex justify-center items-center">
           
            <div className="w-[500px] shadow-md rounded-lg p-5">
                <h1 className=" text-2xl font-bold">Admin Login</h1>
                <p>Welcome Back</p>
                <form onSubmit={handleSubmit}>
                <div className="mt-5">
                    <label className="block">Email</label>
                    <input type="text" placeholder="Enter your email"
                    className=" w-full outline-red-300 p-2 h-10 rounded-md border"
                    onChange={(e)=>setAdminAuth({...adminAuth,email:e.target.value})}
                    />
                </div>
                <div className="mt-5">
                    <label className="block">Password</label>
                    <input type="text" placeholder="Enter your Password"
                    className=" w-full outline-red-300 p-2 h-10 rounded-md border"
                    onChange={(e)=>setAdminAuth({...adminAuth,password:e.target.value})}

                    />
                </div>
                <div className="mt-5">
                    <button type="submit" className=" w-full bg-red-400 rounded-lg p-2 text-white">Submit</button>
                </div>
                </form>
               
                
            </div>
        </div>
    )
}
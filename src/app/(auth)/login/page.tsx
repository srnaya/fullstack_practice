"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import StudentsImage from "../../../../public/students1.webp";

export default function Login() {
    const params=useSearchParams()
    const [login,setLogin] = useState({
        
        email:"",
        password:"",
        
    })
    const [loading,setLoading] = useState<boolean>(false);
const [errors,setErrors] = useState<loginErrorType>({})
    
    const submitForm =()=>{
        
        setLoading(true);
        console.log("The register form click",login)
   axios.post("/api/auth/login",login)
   .then((res)=>{
    setLoading(false)
    const response =res.data;
    if(response.status === 200){
      signIn("credentials",{
        email:login.email,
        password:login.password,
        callbackUrl:"/Students",
        redirect:true
      })
    }else if(response ?.status ===400){
        setErrors(response?.errors)
    }
   })
   .catch((err)=>{
    setLoading(false)
    console.log("Something went wrong")
   })
    }

    // To signin by Github
    const gitHubSignin =()=>{
      signIn("github",{
        callbackUrl:"/Students",
        redirect:true
      })
    }
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute">
            <Image src={StudentsImage} alt='StudentImage'/>
          </div>
        
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            {params.get("message") ? <p className=' bg-green-400 font-bold rounded-md p-4'>{params.get("message")}</p>:<></>}
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={(e)=>setLogin({...login,email:e.target.value})}
                    ></input>
                    <span className=' text-red-500 font-bold'>{errors ?.email}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={(e)=>setLogin({...login,password:e.target.value})}
                    ></input>
                    <span className=' text-red-500 font-bold'>{errors ?.password}</span>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className={`inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${loading ? "bg-gray-500":"bg-black"}`}
                    onClick={submitForm}
                  >
                    {loading ? "Processing" : "Login"}
                  </button>
                </div>
              </div>
            </form>
            <p className=' my-5 text-center'>--OR--</p>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-black px-3.5 py-2.5 font-semibold text-white transition-all duration-200 "
                onClick={gitHubSignin}
              >
                <span className="mr-2 inline-block">
                 
                </span>
                Sign in with Github
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

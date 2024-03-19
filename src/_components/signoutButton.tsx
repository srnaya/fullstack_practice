
"use client";

import {signOut} from "next-auth/react"
export default function signoutButton(){
    return(
        <div>
            <button className=" bg-green-400 rounded-md p-2"
            onClick={()=>signOut({callbackUrl:"/",redirect:true})}
            >
                Signout
            </button>
        </div>
    )
}
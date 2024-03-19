

import SignoutButton from "@/_components/signoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
// export default functin Students(){
//     const session =getServerSession(authOptions)

//     return (<div>
//         <div className="flex justify-center items-center h-screen flex-col">
//             <h1 className=" bg-purple-300 text-3xl font-bold p-4 rounded-md mb-4">Hello I am Logged In</h1>
//             <SignoutButton/>
//         </div>
//     </div>
//     );
// }
export default async function Students(){
    const session = await getServerSession(authOptions)
    if(!session){
     redirect("/login")
    }
    return (
        <div>
      <div className="flex justify-center items-center h-screen flex-col">
             <h1 className=" bg-purple-300 text-3xl font-bold p-4 rounded-md mb-4">{`${session.user?.name} Logged In`}</h1>
             <p>{JSON.stringify(session)}</p>
            <SignoutButton/>
        </div>
    </div>
    )
}


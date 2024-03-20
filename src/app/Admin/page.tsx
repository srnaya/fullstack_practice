import React from "react"
import { CustomSession, authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import TeacherImage from '../../../public/Teachers1.png'
import StudentImage from '../../../public/students1.webp'
import RsImage from '../../../public/Rs1.png'


export default async function Admin() {
    const session: CustomSession | null = await getServerSession(authOptions);

    if (session === null || session?.user?.role !== "Admin") {
        return redirect("/Admin/adminLogin?error=please login first")
    }

    return (
        <div>
            <div className=" mt-2 flex gap-2">
            <div className=" shadow-lg rounded-lg bg-blue-400 w-72">
                <div className=" flex ">
                    <Image src={TeacherImage} alt="Teacher Image" height={70} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Total Teacher</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">6</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-orange-300 w-72">
                <div className=" flex ">
                    <Image src={StudentImage} alt="Teacher Image" height={70} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Total Student</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">6</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-green-400 w-72">
                <div className=" flex ">
                    <Image src={RsImage} alt="Teacher Image" height={60} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Teacher Salary</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">40,000</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-yellow-300 w-72">
                <div className=" flex ">
                    <Image src={RsImage} alt="Teacher Image" height={60} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Student Fee</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">40,000</p>
            </div>
        </div>
        <div className=" mt-2 flex gap-2">
            <div className=" shadow-lg rounded-lg bg-blue-400">
                <div className=" flex ">
                    <Image src={TeacherImage} alt="Teacher Image" height={70} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Pending Teacher</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">6</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-orange-300">
                <div className=" flex ">
                    <Image src={StudentImage} alt="Teacher Image" height={70} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Pending Student</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">6</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-green-400 w-72">
                <div className=" flex ">
                    <Image src={RsImage} alt="Teacher Image" height={60} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Pending Salary</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">40,000</p>
            </div>
            <div className=" shadow-lg rounded-lg bg-yellow-300 w-72">
                <div className=" flex ">
                    <Image src={RsImage} alt="Teacher Image" height={60} />
                    <h1 className=" flex justify-center items-center p-5 text-2xl">Pending Fee</h1>
                </div>
                <p className="flex justify-center items-center p-5 text-2xl">40,000</p>
            </div>
        </div>
        </div>
    )
}


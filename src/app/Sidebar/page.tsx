
import Image from "next/image";
import AdminImage from '../../../public/admin-3d-illustration-icon-png.webp';

import SignoutButton from '@/_components/signoutButton'
import Link from "next/link";
function Sidebar() {
    return (
        <div className=" lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


            <div className="drawer-side">

                <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content ">
                    
                    <li>
                        <Image src={AdminImage} alt="AdminImage" />
                        <h1 className=" flex justify-center items-center text-3xl text-blue-400 font-bold">Admin</h1>
                    </li>


                    <li><Link href="/Admin">Dashboard</Link></li>
                    <li>
                        <details open>
                            <summary> Teachers</summary>
                            <ul>
                                <li><Link href="/AddTeacher">Add Teacher</Link></li>
                                <li><Link href="/ManageTeacher">Manage Teacher</Link></li>

                            </ul>

                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary> Students</summary>
                            <ul>
                                <li><a>Add Student</a></li>
                                <li><a>M Student</a></li>

                            </ul>

                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary> Attendance</summary>
                            <ul>
                                <li><a>T Attendance</a></li>
                                <li><a>S Attendance</a></li>

                            </ul>

                        </details>
                    </li>
                    <li><a>Fee</a></li>
                    <li><a>Notice</a></li>
                    <div className=" flex justify-center items-center"><SignoutButton/></div>
                    
                </ul>
                
            </div>
            
        </div>
    )
}

export default Sidebar;
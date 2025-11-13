"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function NavBar(){

    const [session, setSession] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const condition = localStorage.getItem("loggedIn") === "true";
        setSession(condition);
    }, []);
    
    function redirect() {
        localStorage.setItem("loggedIn", "false")
        localStorage.removeItem("username");
        router.push('/');
    }

    return (
        <nav className="bg-blue-600 text-white py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">  
                    <Image 
                        src={'/universe-logo.png'}
                        width={70}
                        height={70}
                        alt="UniVerse logo"
                        className="rounded-md"
                    />
                    
                </div>

                <div className="space-x-6">
                    {session ? (
                        <>
                            <Link href={'/dashboard'} className="hover:text-gray-300">
                                Home
                            </Link>
                            <Link href={'/dashboard/assignments'} className="hover:text-gray-300">
                                My Assignments
                            </Link>
                            <Link href={'/dashboard/enrollments'} className="hover:text-gray-300">
                                My Enrollment
                            </Link>
                            <Link href={'/dashboard/courses'} className="hover:text-gray-300">
                                Offered Courses
                            </Link>
                            <Link  href={'/dashboard/announcements'} className="hover:text-gray-300">
                                Announcements
                            </Link>
                            <Link href={'/dashboard/lecturers'} className="hover:text-gray-300">
                                Lecturers
                            </Link>
                            <button className="text-black font-semibold bg-white rounded-md p-4 transition duration-1000 hover:bg-gray-200" onClick={() => redirect()}>Log Out!</button>
                        </>
                    ) : <>
                        <Link  href={'/'} className="hover:text-gray-300">
                            Log In
                        </Link>
                    </>}
                </div>
            </div>
        </nav>

    )
}
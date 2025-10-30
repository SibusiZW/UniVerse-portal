"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);

  useEffect(() => {
    setSession(localStorage.getItem("loggedIn") === "true")
  }, [])

  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session, router]);


  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const REQUEST_URL = `http://localhost:3000/api/students/`;
    const res = await fetch(REQUEST_URL);
    const data = await res.json();

    const student = data.find(
      (s: any) => s.student_name === username && s.student_password === password
    );


    if (student) {
      alert("Login successfull!")

      localStorage.setItem("username", username)
      localStorage.setItem("loggedIn", "true")

      router.push('http://localhost:3000/dashboard')
    }
    else {
      alert("Incorrect student no. or password")
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex h-screen items-center justify-center">
     <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm text-center text-black">
        <div className="mb-8 flex flex-col items-center">
        <Image 
          src={'/universe-logo.png'}
          width={120}
          height={40}
          className="mb-2"
          alt="UniVerse Logo"
        />
        </div>
        <h1 className="text-xl font-semibold text-gray-500 mb-2">
          Welcome to UniVerse Portal
        </h1>

          <form onSubmit={handleLogin}>
            <input className="p-4 w-75 border border-blue-300 rounded-md mb-4" placeholder="Enter student name e.g Moyo John" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input className="p-4 w-75 border border-blue-300 rounded-md" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

            <button className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">
              <LogIn size={20}/> Log In
            </button>
          </form>
     </div>
    </div>
  )
}
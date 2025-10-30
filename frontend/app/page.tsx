"use client";
import Image from "next/image"
import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

          <form>
            <input className="p-4 w-75 border border-blue-300 rounded-md mb-4" placeholder="Enter student no. e.g, ST12345678" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input className="p-4 w-75 border border-blue-300 rounded-md" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </form>
     </div>
    </div>
  )
}
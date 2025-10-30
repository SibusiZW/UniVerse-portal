import Image from "next/image"

export default function Home() {
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

          <input className="p-4 w-75 border border-blue-300 rounded-md mb-4" placeholder="Enter student no. e.g, ST12345678"/>
          <input className="p-4 w-75 border border-blue-300 rounded-md" placeholder="Enter password"/>
     </div>
    </div>
  )
}
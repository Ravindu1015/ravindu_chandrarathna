"use client"; // ✅ Marks this as a Client Component

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/profile.jpg"
        alt="Ravindu Chandrarathna"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-6xl font-bold mt-4">Ravindu Chandrarathna</h1>
      <p className="mt-4 text-xl">
        Software Engineer,Project Manager & Full Stack Developer, and Cyber Security Enthusiast
      </p>
      <p>. </p>
      <p>\/</p>
      <button
        className="bg-white border border-black hover:bg-gray-500 text-black py-2 px-6 rounded-3xl shadow-md transition transform hover:scale-105"
        onClick={() => router.push("/home")}>
         More About Me
      </button>


    </div>  
    
    )
}


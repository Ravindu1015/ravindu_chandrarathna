import Image from "next/image";

export default function Home() {
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
      <p> </p>
      <button className="bg-white border border-black text-black py-2 px-6 rounded-full mt-6 transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105">
         More About Me
      </button>


    </div>  
    
    )
}

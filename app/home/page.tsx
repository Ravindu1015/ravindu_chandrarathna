"use client"; // Ensure this component runs on the client side

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="text-lg font-semibold">
            <a href="/" className="hover:underline">My Portfolio</a>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="/home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About Me</a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center bg-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl text-gray-600 mb-6">
          I'm a passionate software engineer with an interest in web development and cybersecurity.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          I have experience working with modern frameworks such as React, Node.js, and have a solid understanding of software testing and cybersecurity practices. 
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => router.push("/projects")}
        >
          View My Projects
        </button>
      </section>

      {/* Basic Info Section */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="mt-4 text-gray-600">
              <li>- JavaScript / TypeScript</li>
              <li>- React / Next.js</li>
              <li>- Node.js</li>
              <li>- Web Security</li>
              <li>- SQL / MongoDB</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <p className="mt-4 text-gray-600">
              Bachelor's in Software Engineering, Sabaragamuwa University, Sri Lanka
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

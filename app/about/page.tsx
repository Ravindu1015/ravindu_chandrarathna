"use client"; // Ensure this component runs on the client side

import NavBar from "../components/NavBar";
import Footer from "../components/footer"; // Corrected casing
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6 text-center md:text-left">
        {/* Left Side: Profile Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image 
            src="/profile.jpg" 
            alt="Ravindu Prabashwara Chandrarathna" 
            width={200} 
            height={200}
            className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Hello, I&apos;m <span className="text-blue-600">Ravindu Prabashwara Chandrarathna</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Passionate Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka, specializing in
            software development, cybersecurity, and data visualization. I enjoy solving complex problems and
            bringing innovative ideas to life.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            I have experience working with modern frameworks such as React, Node.js, and Firebase. My background
            in cybersecurity ensures robust security measures in both development and deployment.
          </p>
        </div>
      </section>

      {/* Skills & Key Highlights Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Skills</h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Languages:</strong> Java, Python, C, PHP</li>
              <li><strong>Frameworks:</strong> React, Angular, MERN Stack, Laravel</li>
              <li><strong>Tools:</strong> Git, VS Code, IntelliJ IDEA, Postman</li>
              <li><strong>Databases:</strong> MySQL, MongoDB, Firestore</li>
              <li><strong>Platforms:</strong> Firebase</li>
              <li><strong>Technologies:</strong> Machine Learning, Cybersecurity</li>
            </ul>
          </div>

          {/* Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image 
                src="/OIP.jpeg" 
                alt="My Journey" 
                fill 
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education and Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Education & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">BSc (Hons) in Software Engineering</h4>
                <p className="text-lg text-gray-600"><strong>Sabaragamuwa University of Sri Lanka</strong> | 2022 – Present</p>
                <p className="mt-2 text-gray-600">
                  Focus: Software Development, Cybersecurity, IT Auditing, Business Intelligence
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Diploma in Cyber Security & Ethical Hacking</h4>
                <p className="text-lg text-gray-600"><strong>SITC Campus, Colombo</strong> | Jan 2023 – Aug 2023</p>
                <p className="mt-2 text-gray-600">
                  Focus: Cyber Forensics, Ethical Hacking, Kali Linux
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Diploma in Project Management</h4>
                <p className="text-lg text-gray-600"><strong>Oxford Home Study Center (OHSC)</strong> | Sep 2024</p>
                <p className="mt-2 text-gray-600">
                  Focus: Planning, Execution, Monitoring
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">G.C.E O/L and A/L</h4>
                <p className="text-lg text-gray-600"><strong>Nalanda College, Colombo 10</strong> | 2012 – 2020</p>
                <p className="mt-2 text-gray-600">
                  Results: O/L - 8A’s, 1B | A/L - 2B’s, 1C
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Treasurer</h4>
                <p className="text-lg text-gray-600"><strong>Society of Computer Sciences, SUSL</strong> | May 2024 – Present</p>
                <p className="text-gray-600">Managed financial transactions and budgeting.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Lobby Manager & Teller (Internship)</h4>
                <p className="text-lg text-gray-600"><strong>Peoples Bank of Sri Lanka</strong> | May 2021 – Aug 2022</p>
                <p className="text-gray-600">Handled customer service and financial transactions.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Committee Member</h4>
                <p className="text-lg text-gray-600"><strong>IEEE Power and Energy Society, SL Section</strong> | Feb 2024 – Feb 2025</p>
                <p className="text-gray-600">Worked on power and energy system innovations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client"; // Ensure this component runs on the client side

import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import footer from "../components/footer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center bg-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Hello, I'm <span className="text-blue-600">Ravindu Prabashwara Chandrarathna</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Passionate Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka, specializing in
          managing, developing, and cybersecurity. I thrive on solving complex problems and bringing innovative ideas
          to life through full-stack development, data visualization, and network security.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          With hands-on experience working with modern frameworks such as React, Node.js, and Firebase, I have a strong
          understanding of software testing methodologies and best practices. My background in cybersecurity ensures robust
          security measures in both development and deployment processes.
        </p>
      </section>

      {/* Skills & Education Section */}
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

          {/* Education */}
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">Education</h2>

            {/* Bachelor's Degree */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bachelor of Science (Honours) in Software Engineering</h3>
              <p className="text-lg text-gray-600">
                <strong>Sabaragamuwa University of Sri Lanka</strong> | 2022 – Present
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Areas of Focus:</strong> Programming and Software Development, Cybersecurity and IT Auditing, Business Intelligence, System Administration
              </p>
            </div>

            {/* Diploma in Cybersecurity */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diploma in Cyber Security and Ethical Hacking</h3>
              <p className="text-lg text-gray-600">
                <strong>SITC Campus, Colombo</strong> | Jan 2023 – Aug 2023
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Areas of Focus:</strong> Cyber/Computer Forensics, Ethical Hacking, Kali Linux
              </p>
            </div>

            {/* Diploma in Project Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diploma in Project Management</h3>
              <p className="text-lg text-gray-600">
                <strong>Oxford Home Study Center (OHSC)</strong> | Sep 2024
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Areas:</strong> Solid foundation in project management principles, including planning, execution, and monitoring.
              </p>
            </div>

            {/* G.C.E O/L and A/L */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">G.C.E O/L and G.C.E A/L</h3>
              <p className="text-lg text-gray-600">
                <strong>Nalanda College, Colombo 10</strong> | Jan 2012 – Aug 2020
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Results:</strong> Passed O/L with 8 A’s, 1 B, and passed A/L with 2 B’s, 1 C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Experience</h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Treasurer</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Society of Computer Sciences, Sabaragamuwa University</strong> | May 2024 – Present
            </p>
            <p className="text-gray-600">
              Responsible for managing financial transactions, budgeting, and ensuring the smooth operation of the Society of Computer Sciences.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lobby Manager & Teller (Internship)</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Peoples Bank of Sri Lanka, Beruwala Branch</strong> | May 2021 – Aug 2022
            </p>
            <p className="text-gray-600">
              Assisted in customer service, handled counter services, cleared cheques, and supported account openings as part of my internship.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Committee Member</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>IEEE Power and Energy Society, Sri Lanka Section</strong> | Feb 2024 – Feb 2025
            </p>
            <p className="text-gray-600">
              Contributed to driving innovation in power and energy systems and collaborated with industry experts in impactful projects.
            </p>
          </div>
        </div>
      </section>
      <footer/>
    </div>
      
  );
}

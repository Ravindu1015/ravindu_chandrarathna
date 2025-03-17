"use client"; // Ensure this component runs on the client side

import NavBar from "../components/NavBar";
import Footer from "../components/footer"; // Corrected the import to match the file name

export default function projects() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* VoluntHeart Project Section */}
      <section className="py-16 px-6 bg-white">
      <h1 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Projects</h1>
        <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">VoluntHeart (Team Project)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side: Project Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <img
              src="/OIP.jpeg" // You can replace this with the actual project image
              alt="VoluntHeart Project"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Project Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">VoluntHeart</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Duration:</strong> Mar 2024 – Jul 2024
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Description:</strong> Built a volunteer management platform to connect volunteers with organizations in Sri Lanka, addressing community needs such as food, shelter, healthcare, and education.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Technologies:</strong> React.js, Firebase, Tailwind CSS, Bootstrap
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Project Management Framework:</strong> Scrum (Agile methodology)
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Role:</strong> Frontend Developer and Project Leader
            </p>
            <p className="text-lg text-gray-600">
              <strong>Repository:</strong> <a href="https://github.com/Ravindu1015/Web-Project-VoluntHeart-.git" className="text-blue-600">GitHub Repository</a>
            </p>
          </div>
        </div>
      </section>

      {/* Profile2Career Project Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Profile2Career (Team Project)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side: Project Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <img
              src="/OIP.jpeg" // You can replace this with the actual project image
              alt="Profile2Career Project"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Project Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile2Career</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Duration:</strong> Jul 2024 – Jan 2025
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Description:</strong> Developed a web-based platform that provides career recommendations and job sourcing by leveraging machine learning to analyze user profiles, qualifications, and work experience.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Technologies:</strong> React.js, Machine Learning
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Project Management Framework:</strong> Scrum (Agile methodology)
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Role:</strong> Full-stack Developer, Project Manager, ML Developer
            </p>
            <p className="text-lg text-gray-600">
              <strong>Repository:</strong> <a href="https://github.com/Ravindu1015/project-group-01.git" className="text-blue-600">GitHub Repository</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

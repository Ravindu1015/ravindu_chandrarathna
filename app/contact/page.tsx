"use client"; // Ensure this component runs on the client side

import NavBar from "../components/NavBar";
import Footer from "../components/footer"; // Corrected the import to match the file name
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Me <span role="img" aria-label="contact">📞</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Feel free to reach out to me via any of the below channels. I’m happy to connect!
        </p>

        {/* Contact Info Box with Rounded Corners */}
        <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <div className="space-y-8 text-lg text-gray-600">
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 rounded-lg transition duration-300">
              <span className="text-2xl">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+94 75 874 3958</span>
            </div>
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 rounded-lg transition duration-300">
              <span className="text-2xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:ravinduchan15@gmail.com" className="text-blue-600">
                ravinduchan15@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 rounded-lg transition duration-300">
              <span className="text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <a
                href="https://www.linkedin.com/in/ravindu-chandrarathna"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ravindu-chandrarathna
              </a>
            </div>
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 rounded-lg transition duration-300">
              <span className="text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <a
                href="https://github.com/Ravindu1015"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Ravindu1015
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbox Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Send a Message <span role="img" aria-label="chat">💬</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          If you'd like to get in touch, feel free to send me a message! It will be directed to my email.
        </p>

        {/* Chatbox Button with White Color */}
        <button
          onClick={() => window.location.href = 'mailto:ravinduchan15@gmail.com'}
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition ease-in-out duration-300"
        >
          Send Message
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

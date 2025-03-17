import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:underline">Ravindu's Portfolio</Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/home"
                className="bg-white border border-black hover:bg-gray-500 text-black py-2 px-6 rounded-3xl shadow-md transition transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="bg-white border border-black hover:bg-gray-500 text-black py-2 px-6 rounded-3xl shadow-md transition transform hover:scale-105"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="bg-white border border-black hover:bg-gray-500 text-black py-2 px-6 rounded-3xl shadow-md transition transform hover:scale-105"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-white border border-black hover:bg-gray-500 text-black py-2 px-6 rounded-3xl shadow-md transition transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

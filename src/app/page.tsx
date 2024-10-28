import Image from "next/image";
import logo from "/public/pic2.jpg"; 
import poster from "/public/poster.jpg";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-r from-pink-500 to-purple-500 px-28 py-5 relative">
      <nav className="flex items-center bg-blue-400 to-pink-400 p-4 rounded-lg shadow-lg">
        <Image src={logo} alt="logo" className="w-24 cursor-pointer" />
        <ul className="flex-grow text-left flex space-x-4 ml-4">
          <li className="list-none">
            <a
              href="/"
              className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full border border-green-950 hover:border-black transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              href="/about"
              className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full border border-green-950 hover:border-black transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className="list-none">
            <a
              href="/contact"
              className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full border border-green-950 hover:border-black transition-all duration-300"
            >
              Contact
            </a>
          </li>
          <li className="list-none">
            <a
              href="/my-art"
              className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full border border-green-950 hover:border-black transition-all duration-300"
            >
              My Art
            </a>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-purple-600"
          />
        </div>
      </nav>

      <div className="flex justify-between items-center mt-10 max-w-full">
        <div className="text-black max-w-xl">
          <h1 className="text-5xl font-bold italic leading-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-green-950 to-red-950">
            Hello I'm Maham Shahid<br />
          </h1>

          <p className="mt-6 text-lg text-gray-800">
            "I'm an IT student with a passion for creativity. 
            From writing code to sketching on canvas, I believe in the art of building and designing!"
          </p>
          <br />

          <h2 className="text-4xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-800 to-yellow-800 mt-4">
            World of Creativity
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            "Where every color, every craft, and every hand tells a unique story.
            From beginners to pros, our classes inspire every artist's journey!"
          </p>

          <a href="/join" className="bg-purple-600 rounded-full py-3 px-8 font-medium inline-block mr-4 border border-green-500 hover:bg-transparent hover:border-black hover:text-black transition-all duration-300 mt-6">
            Join Our Classes
          </a>
        </div>

        <div className="flex-auto max-w-md">
          <Image src={poster} alt="poster" className="w-full h-auto object-cover" />
        </div>
      </div>

      <footer className="bg-blue-400 text-white p-4 mt-10 text-center">
        <p className="text-sm">
          © 2024 Maham Shahid. All rights reserved. | <a href="/privacy-policy" className="text-yellow-300 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-yellow-300 hover:underline">Terms of Service</a>
        </p>
        <div className="mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

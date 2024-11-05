"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "/public/pic2.jpg";
import poster from "/public/poster.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 sm:px-8 lg:px-28 py-5 relative">
      <nav className="flex items-center justify-between bg-blue-400 p-4 rounded-lg shadow-lg">
        <Image src={logo} alt="logo" className="w-16 sm:w-20 lg:w-24 cursor-pointer" />

        
        <button
          className="text-black md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

   
        <button
          className="text-black md:hidden ml-4 focus:outline-none"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l4 4m0 0l4-4m-4 4V4" />
          </svg>
        </button>

        
        <ul className="hidden md:flex flex-grow text-left space-x-4 ml-4">
          {["Home", "About", "Contact", "My Art"].map((text) => (
            <li key={text} className="list-none">
              <a
                href={`/${text.toLowerCase().replace(" ", "-")}`}
                className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full border border-green-950 hover:border-black transition-all duration-300"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

      
        {menuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-400 rounded-lg shadow-lg text-center">
            {["Home", "About", "Contact", "My Art"].map((text) => (
              <li key={text} className="list-none py-2 border-b border-blue-500">
                <a
                  href={`/${text.toLowerCase().replace(" ", "-")}`}
                  className="no-underline text-black hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full transition-all duration-300 block"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}

       
        {searchOpen && (
          <div className="absolute top-16 right-4 md:relative md:top-0 md:right-0 w-3/4 md:w-auto bg-white rounded-lg shadow-lg p-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-purple-600"
            />
          </div>
        )}

        
        <div className="hidden md:flex relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 px-4 w-full sm:w-52 focus:outline-none focus:border-purple-600"
          />
        </div>
      </nav>

 
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 max-w-full">
        <div className="text-black max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-bold italic leading-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-green-950 to-red-950">
            Hello, I'm Maham Shahid
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-800">
            "I'm an IT student with a passion for creativity. From writing code to sketching on canvas, I believe in the art of building and designing!"
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-800 to-yellow-800 mt-4">
            World of Creativity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-800">
            "Where every color, every craft, and every hand tells a unique story. From beginners to pros, our classes inspire every artist's journey!"
          </p>
          <a
            href="/join"
            className="bg-purple-600 rounded-full py-2 sm:py-3 px-6 sm:px-8 font-medium inline-block mt-6 border border-green-500 hover:bg-transparent hover:border-black hover:text-black transition-all duration-300"
          >
            Join Our Classes
          </a>
        </div>
        <div className="flex-auto max-w-full lg:max-w-md mt-8 lg:mt-0">
          <Image src={poster} alt="poster" className="w-full h-auto object-cover" />
        </div>
      </div>

      <footer className="bg-blue-400 text-white p-4 mt-10 text-center">
        <p className="text-xs sm:text-sm">
          © 2024 Maham Shahid. All rights reserved. | <a href="/privacy-policy" className="text-yellow-300 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-yellow-300 hover:underline">Terms of Service</a>
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

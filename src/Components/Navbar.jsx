import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2">
      <div className="2xl:px-[200px] lg:px-20 lg:py-6 px-4 py-1 flex justify-between">
        <div className="lg:w-[191px] lg:h-[39px] 2xl:w-[300px] 2xl:h-[40px] w-[150px] h-[25px] pt-[10px] md:pt-[15px]">
          <img
            className="2xl:w-[280px] 2xl:h-[60px]"
            src="/logo2.png"
            alt="Your Company"
          />
        </div>
        <div
          className={`lg:text-[18px] 2xl:text-[24px] text-xs flex ${
            isMenuOpen ? "hidden" : "block"
          } hidden sm:ml-2 sm:inline-flex`}
        >
          <div className="flex flex-col justify-center">
            <div>
              <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group">
                Home
                <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group">
                Flashcard
                <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group">
                Contact
                <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group">
                FAQ
                <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
            </div>
          </div>
          <button className="lg:w-[128px] lg:h-[48px] mx-2 my-2 rounded-3xl lg:px-[40px] lg:py-[13px] px-[30px] py-[10px] text-white bg-gradient-to-b from-[#06286E] to-[#164EC0] text-[18px] cursor-pointer">
            Login
          </button>
        </div>
        <button
          onClick={toggleMenu}
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-[#3A3740] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group block">
            Home
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-[15%]"></span>
          </span>
          <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group block">
            Flashcard
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-[15%]"></span>
          </span>
          <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group block">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-[15%]"></span>
          </span>
          <span className="text-[#3A3740] lg:mx-4 lg:my-2 mx-3 font-inter cursor-pointer relative group block">
            FAQ
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-linear w-0 transition-all duration-300 ease-out group-hover:w-[15%]"></span>
          </span>
          <button className="lg:w-[128px] lg:h-[48px] mx-2 my-2 rounded-3xl lg:px-[40px] lg:py-[13px] px-[30px] py-[10px] text-white bg-gradient-to-b from-[#06286E] to-[#164EC0] text-[18px] cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

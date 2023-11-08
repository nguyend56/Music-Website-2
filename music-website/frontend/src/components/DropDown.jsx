import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-96 rounded-md shadow-sm px-4 py-2 bg-white text-2xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black">
          Categories
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              d={isOpen ? "M5 15l5-5 5 5H5z" : "M5 5l5 5 5-5H5z"}
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <button
              onClick={() => scrollToSection("duet")}
              className="text-black block w-full text-center px-4 py-4 text-lg border border-black hover:bg-gray-300 hover:translate-x-[-5px] hover:translate-y-[-5px] transform transition-transform"
              role="menuitem">
              Duet
            </button>
            <button
              onClick={() => scrollToSection("accompanying")}
              className="text-black block w-full text-center px-4 py-4 text-lg border border-black hover:bg-gray-300 hover:translate-x-[-5px] hover:translate-y-[-5px] transform transition-transform"
              role="menuitem">
              Accompanying
            </button>
            <button
              onClick={() => scrollToSection("covers")}
              className="text-black block w-full text-center px-4 py-4 text-lg border border-black hover:bg-gray-300 hover:translate-x-[-5px] hover:translate-y-[-5px] transform transition-transform"
              role="menuitem">
              Covers
            </button>
            <button
              onClick={() => scrollToSection("mashup")}
              className="text-black block w-full text-center px-4 py-4 text-lg border border-black hover:bg-gray-300 hover:translate-x-[-5px] hover:translate-y-[-5px] transform transition-transform"
              role="menuitem">
              Mashup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

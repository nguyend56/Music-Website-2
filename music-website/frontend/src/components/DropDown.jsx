import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-center text-3xl bg-white text-black w-full cursor-pointer hover:bg-gray-400 transition-opacity duration-300">
        Menu
      </button>
      <div
        className={`text-center transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="list-none">
          <li
            onClick={() => handleNavigate("/")}
            className="text-center bg-black text-white w-full cursor-pointer hover:bg-gray-400 transition-opacity duration-300 text-xl">
            Home
          </li>
          <li
            onClick={() => handleNavigate("/settings")}
            className="text-center bg-white text-black w-full cursor-pointer hover:bg-gray-400 transition-opacity duration-300 text-xl">
            About
          </li>
          <li
            onClick={() => handleNavigate("/singles")}
            className="text-center bg-black text-white w-full cursor-pointer hover:bg-gray-400 transition-opacity duration-300 text-xl">
            Singles
          </li>
          <li
            onClick={() => handleNavigate("/beats")}
            className="text-center bg-white text-black w-full cursor-pointer hover:bg-gray-400 transition-opacity duration-300 text-xl">
            Beats
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

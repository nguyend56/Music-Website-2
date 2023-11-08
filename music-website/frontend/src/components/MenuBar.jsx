import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

  return (
    <div className="flex justify-center p-4 bg-white shadow-md space-x-4">
      <button
        onClick={() => navigate("/")}
        className={`text-3xl cursor-pointer hover:bg-gray-500 p-2 transition-opacity duration-300 border border-black ${
          isActive("/") ? "bg-gray-400" : ""
        }`}>
        Home
      </button>
      <button
        onClick={() => navigate("/about")}
        className={`text-3xl cursor-pointer hover:bg-gray-500 p-2 transition-opacity duration-300 border border-black ${
          isActive("/about") ? "bg-gray-400" : ""
        }`}>
        About
      </button>
      <button
        onClick={() => navigate("/singles")}
        className={`text-3xl cursor-pointer hover:bg-gray-500 p-2 transition-opacity duration-300 border border-black ${
          isActive("/singles") ? "bg-gray-400" : ""
        }`}>
        Singles
      </button>
      <button
        onClick={() => navigate("/piano")}
        className={`text-3xl cursor-pointer hover:bg-gray-500 p-2 transition-opacity duration-300 border border-black ${
          isActive("/beats") ? "bg-gray-400" : ""
        }`}>
        Piano 
      </button>
    </div>
  );
};

export default MenuBar;

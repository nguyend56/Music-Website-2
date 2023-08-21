import React from "react";
import logo from "../pictures/BobTheDreiz Logo.png";
import Dropdown from "./DropDown";

const NavBar = () => {
  return (
    <div className="text-center">
      <img
        src={logo}
        alt="Centered Image"
        className="block mx-auto"
        style={{
          maxHeight: "30%",
          maxWidth: "30%",
        }}
      />
      <Dropdown />
    </div>
  );
};

export default NavBar;

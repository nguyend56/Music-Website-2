import React from "react";
import logo from "../pictures/BobTheDreiz Logo.png";

const Logo = () => {
  return (
    <div className="text-center">
      <img
        src={logo}
        alt="Centered"
        className="block mx-auto"
        style={{
          maxHeight: "30%",
          maxWidth: "30%",
        }}
      />
      
    </div>
  );
};

export default Logo;

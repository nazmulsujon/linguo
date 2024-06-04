import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex flex-col">
        <img className="w-16 mx-auto" src="/logo.jpg" alt="logo" />
        <h2 className="text-center text-[10px] font-bold text-blue-800 mb-1">
          LINGUO
        </h2>
      </div>
      <p className="font-extrabold text-lg pe-10 text-black/70">{title}</p>
    </div>
  );
};

export default Header;

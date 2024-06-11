import React from "react";

const Header = ({ title, setContent }) => {
  return (
    <div className="flex justify-between items-center px-4 py-1">
      <div
        onClick={() => {
          setContent("home");
        }}
        className="flex flex-col cursor-pointer"
      >
        <img className="w-20 mx-auto" src="/logo.png" alt="logo" />
        {/* <h2 className="text-center text-[16px] tracking-[2px]	 font-bold text-blue-800 mb-1">
          LINGUO
        </h2> */}
      </div>
      <p className="font-extrabold text-lg pe-10 text-black/70">{title}</p>
    </div>
  );
};

export default Header;

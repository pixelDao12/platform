import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <div className="grid grid-cols-3  text-[#FFFFFF]">
        <div className="flex text-sm p-[3%]">
          <p className="pl-[4%]">HOME</p>
          <p className="pl-[4%]">ABOUT US</p>
          <p className="pl-[4%]">RESOURCES</p>
        </div>
        <p className="text-center text-4xl">PIXEL</p>
        <div className="p-[3%] text-black">
          <button className="mx-4 border rounded-md bg-[#FCA311] p-1">
            Join Our Squard
          </button>
          <button className="mx-4 border rounded-md bg-[#FCA311] p-1">
            Be A Jedi
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;

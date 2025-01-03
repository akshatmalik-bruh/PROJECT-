import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between p-5 bg-slate-950 fixed top-0 h-24  items-center">
        <Link to="/">
          <img
            src="https://media.istockphoto.com/id/1423278291/vector/69-number-sixty-nine-icon-sticker-on-gray-background.jpg?s=612x612&w=0&k=20&c=nXseodamJjLgLkCom7leAEKDZWt5eSpdKC06nf4mnv8="
            className="h-12 md:h-16 rounded-xl"
            alt=""
          />
        </Link>

        <Link
          to="/login"
          className="font-semibold text-red-500 md:text-xl bg-white p-3  rounded-xl text-xs m-0 hover:bg-red-500 hover:text-white"
        >
          Logout
        </Link>
      </div>
    </>
  );
}

export default Navbar;

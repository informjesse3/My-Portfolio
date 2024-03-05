import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";

import { BsPerson } from "react-icons/bs";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    function handleNav() {
      setNav(!nav);
      console.log("set changed");
    }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items center z-20">
          <NavLink
            // onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full  bg-gray-100 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} color={"gray"} />
            <span className="pl-4">Home</span>
          </NavLink>

          <NavLink
            // onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-100  m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <GoProjectRoadmap className="text-white" color="white" />
            <span className="pl-4 text-white">Work</span>
          </NavLink>

          <NavLink
            // onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} color={"gray"} />
            <span className="pl-4 text-gray-800">Projects</span>
          </NavLink>

          <NavLink
            // onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full  m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} color={"gray"} />
            <span className="pl-4 text-gray-400">Resume</span>
          </NavLink>

          <NavLink
            // onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} color={"gray"} />
            <span className="pl-4">Contact</span>
          </NavLink>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} color={"black"} />
          </NavLink>

          <NavLink
            to="exp"
            className="rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GoProjectRoadmap size={20} color={"black"} />
          </NavLink>

          <NavLink
            to="about"
            className="rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} color={"black"} />
          </NavLink>

          <NavLink
            to="exp"
            className="rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} color={"black"} />
          </NavLink>

          <NavLink
            to="exp"
            className="rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} color={"black"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
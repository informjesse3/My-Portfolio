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
        color="#804dee"
        onClick={handleNav}
        className="absolute top-4 right-4 z-[50] md:hidden text-[#804dee]"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items center z-20">
          <NavLink
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full  bg-gray-100 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} className="text-gray-800" />
            <span className="pl-4 text-gray-800">Home</span>
          </NavLink>

          <NavLink
            onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-100  m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <GoProjectRoadmap size={20} className="text-gray-800" />
            <span className="pl-4 text-gray-800">Work</span>
          </NavLink>

          <NavLink
            onClick={handleNav}
            to="about"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} className=" text-gray-800" />
            <span className="pl-4 text-gray-800">Projects</span>
          </NavLink>

          <NavLink
            onClick={handleNav}
            to="exp"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-100  m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} className="text-gray-800" />
            <span className="pl-4 text-gray-800">Resume</span>
          </NavLink>

          <NavLink
            onClick={handleNav}
            to="Kontact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointed hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} className="text-gray-800" />
            <span className="pl-4 text-gray-800">Contact</span>
          </NavLink>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden  top-[25%] z-10 bg-white">
        <div className="flex flex-row justify-end ">
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
            to="feedback"
            className="rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} color={"black"} />
          </NavLink>

          <NavLink
            to="Kontact"
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

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import {ImArrowRight} from "react-icons/im"
import Login from "./Login";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import HouseModel from "./canvas/HouseModel";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <>
      <div className="relative  w-full h-screen mx-auto bg-white select-none">
        <motion.div variants={textVariant()} className="mt-3">
          <h1 className="text-[#000] my-4 text-3xl font-bold cursor-pointer ">
            Home
          </h1>
          <p className="text-gray-600 cursor-pointer hover:text-[#915eff] flex flex-row text-center justify-center gap-1">
            <span className="mt-1">
              <ImArrowRight className="text-sm sm:lg" />
            </span>
            <NavLink to={"model"} className="text-sm sm:md">
              Browse Models
            </NavLink>
          </p>
        </motion.div>
        <div
        // className={` absolute inset-0 top-[120px] max-w-[1200px] flex flex-col items-start gap-5`}
        >
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-gray-500" />
            <div className="w-1 sm:h-80 h-40  bg-gray-400" />
          </div> */}
          <div className="h-full w-full flex flex-col ">
            <h1 className="text-[gray] px-4">
              In the world of creativity.
              <span className="text-[#000]">JessEnT</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-400 px-4`}>
              Creativity is a wild mind&nbsp;
              <br className="sm:block hidden" />
              and a disciplined eye.
            </p>
            {/* <div className="flex flex-row mt-6 w-full ">
            <div className=" h-80 w-80 bg-hero-pattern bg-cover bg-center"></div>
          </div> */}
            {/* <EarthCanvas /> */}

            <div className="w-full sm:h-[800px] h-[400px] bg-gray-400 rounded-md mt-6">
              <HouseModel />
            </div>
          </div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className=" m-4 mt-4 text-secondary text-[14px] max-w-3xl leading-30"
          >
            <p className="text-gray-600 font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[30px]">
              Let's Create Your Dream Home
            </p>
            <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              Purpose.
            </h2>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className=" m-4 mt-4 text-secondary text-[14px] max-w-3xl leading-30"
            >
              Welcome to JessEnt 3D where imagination meets reality! We
              specialize in crafting intricate three-dimensional models of
              houses, transforming architectural blueprints into immersive
              virtual experiences. At JessEnt 3D, we understand that a house is
              more than just bricks and mortar; it's a sanctuary, a space where
              memories are made and dreams are realized. Our mission is to bring
              those dreams to life through our state-of-the-art modeling
              techniques and cutting-edge technology. With our photorealistic
              renderings and immersive virtual tours, clients can explore their
              future homes from every angle, gaining a true sense of the scale,
              layout, and ambiance. We utilize the latest virtual reality
              technology to provide an unparalleled level of immersion, allowing
              clients to walk through their homes as if they were already there.
            </motion.p>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hero, "");


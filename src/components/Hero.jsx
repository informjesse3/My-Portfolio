import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
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
      <section className="relative w-full h-screen mx-auto bg-white">
        <motion.div variants={textVariant()}>
          <div className="flex flex-row justify-between text-center">
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
          </div>
        </motion.div>
        <div
          className={`${styles.paddinX} absolute inset-0 top-[120px] max-w-[1200px] flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-gray-500" />
            <div className="w-1 sm:h-80 h-40  bg-gray-400" />
          </div>
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

            <div className="w-full sm:h-[800px] h-[400px] bg-gray-500 rounded-md">
              <HouseModel />
            </div>
          </div>
        </div>

        {/* <EarthCanvas /> */}

        {/* <div className="my-80">
        {" "}
        <Login />
      </div> */}

        {/* <div className="absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center ">
        <a href="about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-items-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}

              
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary mb-1 rounded-full"
            />
          </div>
        </a>
      </div> */}
      </section>
    </>
  );
};

export default SectionWrapper(Hero, "");


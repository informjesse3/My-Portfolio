import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import {ImArrowRight} from "react-icons/im"
import Login from "./Login";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto bg-white">
        <div className="flex flex-row justify-between ml-28 text-center mr-6">
          <h1 className="text-[#915eff] my-4 text-xl cursor-pointer ">Home</h1>
          <p className="text-gray-600 mt-[4rem] cursor-pointer hover:text-[#915eff] flex flex-row text-center justify-center gap-1">
            <span className="mt-1">
              <ImArrowRight />
            </span>
            <NavLink to={"model"}> Browse Models</NavLink>
          </p>
        </div>
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40  violet-gradient" />
          </div>
          <div className="h-[500px] w-full">
            <h1 className="text-[gray]">
              In the world of creativity.
              <span className="text-[#915eff]">JessEnT</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-400`}>
              Creativity is a wild mind
              <br className="sm:block hidden" />
              and a disciplined eye.
            </p>
            {/* <div className="flex flex-row mt-6 w-full ">
            <div className=" h-80 w-80 bg-hero-pattern bg-cover bg-center"></div>
          </div> */}
            <EarthCanvas />
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

export default Hero;

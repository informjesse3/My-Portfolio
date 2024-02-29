import React from 'react'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ComputersCanvas,
} from "../components";
import { motion, stagger } from "framer-motion";
import FormAnime from './canvas/FormAnime';
import { styles } from '../styles';

import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from '../utils/motion';
import HouseModel from './canvas/HouseModel';

export default function Jessent() {

  return (
    <div className="relative z-0 bg-white ">
      <div className="h-screen">
        <motion.div variants={textVariant()} className="ml-4">
          <p className="text-gray-600 font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[30px]">
            Interior
          </p>
          <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Purpose.
          </h2>
        </motion.div>
        <HouseModel />
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" m-4 mt-4 text-secondary text-[14px] max-w-3xl leading-30"
      >
        We are a family owned company and started off for the love of playing
        video games in the heart of Michigan. We got tired of the same games and
        how the games being built would never listen to the people playing. We
        wanted to change that. We started the company We Have The Power Have The
        Power. We will be having several divisions of this company. This is th
        gaming division. This is just the begining of what can be done. We will
        be having Charity. Learning as well as local events
      </motion.p>
      {/* <StarsCanvas /> */}
    </div>
  );
}

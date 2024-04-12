import React from "react";
import { motion, stagger } from "framer-motion";
import hs1 from "../assets/hsmodels/jesssent1.png";
import hs2 from "../assets/hsmodels/jesscity4.png";
import hs3 from "../assets/hsmodels/hsmodel.png";
import hs4 from "../assets/hsmodels/hsmodel1.png";
import hs5 from "../assets/hsmodels/hsmodel2.png";
import hs6 from "../assets/hsmodels/hsmodel3.png";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { NavLink } from "react-router-dom";

const IMAGE = [
  { pic: hs3, title: "3 Bedroom ", des: "View more" },
  { pic: hs4, title: "1 Bedroom", des: "View more" },
  { pic: hs5, title: "2 Bedroom", des: "View more" },
  { pic: hs6, title: "Studio", des: "View more" },
  // { pic: hs1, title: "House Model 1", des: "hsdhkba ajjahjdhk" },
  // { pic: hs2, title: "House Model 1", des: "hsdhkba ajjahjdhk" },
  { pic: hs4, title: "1 Bedroom", des: "View more" },
  { pic: hs5, title: "2 Bedroom", des: "View more" },
];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="relative flex justify-center bg-white w-full mt-12">
      <div className=" flex flex-col justify-center text-center">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionHeadText}>Introduction</p>
          <h2 className={styles.sectionSubText}>
            <NavLink to={"/login"}>Purpose.</NavLink>
          </h2>
        </motion.div>
        <div className="justify-center text-center flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[14px] max-w-3xl leading-30 "
          >
            Whether you're an architect looking to showcase your designs, a real
            estate developer seeking to pre-visualize your projects, or a
            homeowner eager to visualize your dream home before construction
            begins, JessEnt 3D is your trusted partner every step of the way.
            Our team of skilled artists and designers meticulously recreate
            every detail of the house, from the architectural structure to the
            interior furnishings and decor, ensuring that the final model is an
            accurate representation of the envisioned space.
          </motion.p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-2 justify-center mb-4">
          {IMAGE.map((image, index) => (
            <div>
              <div className="" key={index}>
                <img
                  key={index}
                  src={image.pic}
                  alt="image"
                  className="object-cover w-full h-full  "
                />
              </div>
              <div className="items-start flex flex-col ml-3">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 90,
                  }}
                  className="text-gray-800 font-bold select-none"
                >
                  {image.title}
                </motion.p>
                <p className="text-gray-600 cursor-pointer hover:underline select-none underline-offset-4">
                  {image.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

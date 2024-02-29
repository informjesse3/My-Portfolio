import React from "react"; 
import { motion, stagger } from "framer-motion";
import hs1 from "../assets/hsmodels/jesssent1.png";
import hs2 from "../assets/hsmodels/jesscity4.png";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";




const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={styles.sectionSubText}>Purpose.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] max-w-3xl leading-30"
      >
        We are a family owned company and started off for the love of playing
        video games in the heart of Michigan. We got tired of the same games and
        how the games being built would never listen to the people playing. We
        wanted to change that. We started the company We Have The Power Have The
        Power. We will be having several divisions of this company. This is th
        gaming division. This is just the begining of what can be done. We will
        be having Charity. Learning as well as local events
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} */}
        <div className=" rounded-lg">
          <img src={hs1} alt="pic" width={500} className="rounded-lg" />
        </div>
        <div className=" rounded-lg">
          <img src={hs2} alt="pic" width={500} className="rounded-lg" />
        </div>
        <div className=" rounded-lg">
          <img src={hs1} alt="pic" width={500} className="rounded-lg" />
        </div>
        <div className="rounded-lg">
          <img src={hs1} alt="pic" width={500} className="rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper (About, "about")

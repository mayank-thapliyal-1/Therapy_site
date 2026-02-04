"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import pic from "../src/Heropic.jpg";
import { hoverStyle, slideInView } from "../Animation/animation";
const Hero = () => {
  return (
    <div className="font-mont flex sm:flex-row flex-col h-screen sm:h-full pt-20 items-center justify-around w-screen overflow-hidden">
      <motion.div
        {...slideInView()}
      >
        <Image className="rounded-t-full sm:h-screen h-80 w-60 sm:w-130 " src={pic} alt="" />
      </motion.div>
      <div className="flex flex-col gap-7 items-center justify-center">
        <motion.h1
          {...slideInView()}
          className="sm:text-6xl text-2xl font-semibold "
        >
          Support for Anxiety, <br /> Trauma, and Burnout
        </motion.h1>
        <p className="sm:text-xl text-md"> Therapy for Adults in Santa Monica, CA</p>
        <motion.button
          {...slideInView()}
         {...hoverStyle()}
         
          className="border cursor-pointer font-semibold  px-5 py-2 flex items-center gap-3 uppercase"
        >
          Connect With Me <MdArrowRightAlt className="text-2xl " />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;

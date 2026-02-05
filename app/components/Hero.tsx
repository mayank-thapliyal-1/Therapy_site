"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import pic from "../src/Heropic.jpg";
import { hoverStyle, slideInView } from "../Animation/animation";
const Hero = () => {
  return (
    <div className="font-mont mt-4  flex sm:flex-row flex-col h-full  sm:pt-19 pt-16 sm:gap-0 sm:p-0 p-5 gap-6 items-center justify-around w-screen overflow-hidden">
      <motion.div
        {...slideInView()}
        className=" relative sm:h-180 sm:w-120 h-90 w-60 flex justify-center items-end overflow-hidden"
      >
        <Image
          className="  rounded-t-full object-contain relative top-9 h-full w-full "
          src={pic}
          alt=""
        />
      </motion.div>
      <div className="flex flex-col sm:gap-7 gap-7 items-center justify-center">
        <motion.h1
          {...slideInView()}
          className="sm:text-6xl text-2xl font-semibold "
        >
          Support for Anxiety, <br /> Trauma, and Burnout
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:text-xl text-md"
        >
          {" "}
          Therapy for Adults in Santa Monica, CA
        </motion.p>
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

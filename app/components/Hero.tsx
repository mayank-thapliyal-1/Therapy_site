"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import pic from "../src/Heropic.jpg";
const Hero = () => {
  return (
    <div className="font-mont flex sm:flex-row flex-col h-screen sm:h-full pt-20 items-center justify-around w-screen overflow-hidden">
      <motion.div
        animate={{
          y: [80, 0],
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Image className="rounded-t-full sm:h-screen h-60 w-40 sm:w-120 " src={pic} alt="" />
      </motion.div>
      <div className="flex flex-col gap-7 items-center justify-center">
        <motion.h1
          animate={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="sm:text-6xl text-2xl font-semibold "
        >
          Support for Anxiety, <br /> Trauma, and Burnout
        </motion.h1>
        <p className="sm:text-xl text-md"> Therapy for Adults in Santa Monica, CA</p>
        <motion.button
          animate={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            backgroundColor: "#15173D",
            color: "white",
            borderColor: "#15173D",
          }}
          transition={{
            duration: 0.5,
          }}
          className="border cursor-pointer font-semibold  px-5 py-2 flex items-center gap-3 uppercase"
        >
          Connect With Me <MdArrowRightAlt className="text-2xl " />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;

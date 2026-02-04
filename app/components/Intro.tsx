"use client";
import Image from "next/image";
import pic from "../src/Dr. Maya Reynolds.png";
import pic2 from "../src/intro.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div className="flex  sm:flex-row flex-col-reverse justify-around sm:h-screen items-center font-mont bg-accent sm:p-4 p-5 h-full">
      <div className="flex-1 h-full flex flex-col sm:gap-10 gap-5 justify-center items-center sm:px-20">
        <div className="flex flex-col justify-around sm:gap-7 gap-3">
          <motion.h1
            whileInView={{
              y: [40, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.5,
            }}
            className="sm:text-5xl text-2xl font-semibold"
          >
            Hi, I’m Dr. Maya Reynolds.
          </motion.h1>
          <p className="sm:text-xl ">
            I provide a calm, supportive space where you can explore your
            thoughts, emotions, and stress without judgment. Together, we’ll
            work at a steady pace to understand what you’re experiencing and
            build practical, grounded tools for healing and balance.
          </p>
        </div>
        <motion.button
          className="flex cursor-pointer items-center justify-center gap-4 border uppercase py-2 px-5"
          whileInView={{
            y: [80, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            backgroundColor: "#15173D",
            color: "white",
            borderColor: "#15173D",
          }}
        >
          Let's Chat <MdArrowRightAlt className="text-2xl " />
        </motion.button>
      </div>
      <div className="flex-1  flex  sm:flex-col flex-row items-center sm:h-full  overflow-hidden  sm:w-full w-screen sm:py-10 p-5">
        <motion.div
          whileInView={{
            y: [100, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            className="relative sm:left-0 left-20  sm:h-160 sm:w-110 h-100 w-80 rounded-t-full"
            src={pic}
            alt=""
          />
        </motion.div>
        <motion.div
          whileInView={{
            y: [80, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            className=" relative sm:h-70 sm:w-70 h-40 w-60 object-cover rounded-full  sm:-top-60 sm:-right-40 top-24 right-5  border border-white"
            src={pic2}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import image from "../src/getmetouch.jpg";
import { hoverStyle, slideInView } from "../Animation/animation";
const GetInTouch = () => {
  return (
    <div className="flex  sm:flex-row flex-col-reverse items-center h-full w-screen  sm:h-screen bg-accent font-mont sm:gap-0 gap-10 ">
      <div className="flex-1 flex flex-col bg-accent  sm:h-full sm:gap-0 gap-20 h-fit justify-between  items-center ">
        <div className="flex  items-center justify-center  flex-1  sm:p-10 p-5">
          <div className="flex flex-col gap-5 sm:gap-10">
            <motion.h2
             {...slideInView()}
              className="font-semibold sm:text-5xl text-4xl"
            >
              When stress and anxiety start to take over
            </motion.h2>
            <p className="sm:text-xl text-sm">
              Life can feel overwhelming when worry, burnout, or past
              experiences keep you mentally and physically on edge. You may
              appear fine on the outside but feel exhausted, tense, or stuck in
              overthinking.
            </p>
            <p className="sm:text-xl text-sm">
              Therapy gives you a steady, supportive space to slow down,
              understand what’s happening, and build practical tools for relief.
            </p>
          </div>
        </div>
        <motion.button
       {...slideInView()}
          {...hoverStyle()}
          className=" flex cursor-pointer gap-4 items-center justify-center p-5 w-full border-t border-foreground uppercase overflow-hidden"
        >
          Get In Touch
          <MdArrowRightAlt className="sm:text-2xl text-xl" />
        </motion.button>
      </div>
      <motion.div
        {...slideInView()}
        className="flex-1 h-full w-full "
      >
        <Image
          className=" sm:h-full  sm:w-220 h-100 w-full"
          src={image}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default GetInTouch;

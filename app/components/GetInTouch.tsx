"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import image from "../src/getmetouch.jpg";
const GetInTouch = () => {
  return (
    <div className="flex  sm:flex-row flex-col-reverse items-center h-full w-screen overflow-hidden sm:h-[90vh] bg-accent font-mont sm:gap-0 gap-10 ">
      <div className="flex-1 flex flex-col bg-accent  sm:h-full sm:gap-0 gap-20 h-fit justify-between  items-center ">
        <div className="flex  items-center justify-center  flex-1  sm:p-10 p-5">
          <div className="flex flex-col gap-5 sm:gap-10">
            <motion.h2
              whileInView={{
                y: [80, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.5,
              }}
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
          whileInView={{
            y: [40, 0],
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
          className=" flex cursor-pointer gap-4 items-center justify-center p-5 w-full border-t border-foreground uppercase"
        >
          Get In Touch
          <MdArrowRightAlt className="sm:text-2xl text-xl" />
        </motion.button>
      </div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [80, 0],
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex-1 h-full "
      >
        <Image
          className=" sm:h-full  sm:w-220 h-70 w-screen"
          src={image}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default GetInTouch;

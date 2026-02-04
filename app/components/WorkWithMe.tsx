"use client";
import Image from "next/image";
import Img from "../src/image2.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { hoverStyle, slideInView } from "../Animation/animation";
const WorkWithMe = () => {
  const obj = [
    {
      data: "Constant worry, overthinking, or feeling on edge",
    },
    {
      data: "Panic symptoms or ongoing body tension",
    },
    {
      data: "Feeling “functional” but internally exhausted",
    },
    {
      data: "Burnout from high pressure or perfectionism",
    },
    {
      data: "Past experiences affecting your confidence or relationships",
    },
  ];
  return (
    <div className="flex sm:flex-row text-accent flex-col  justify-around items-center sm:h-screen  font-mont bg-primary  h-full">
      <motion.div
        whileInView={{
          y: [200, 0],
          opacity: [0, 1],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="flex-1 sm:h-screen  h-80 object-contain overflow-hidden"
      >
        <Image className="object-cover sm:h-full h-100 " src={Img} alt="" />
      </motion.div>
      <div className="flex-1 flex flex-col justify-between sm:gap-0 gap-6 h-full">
        <div className="flex flex-col flex-1 justify-center  gap-7  p-10">
          <motion.h1
            className="sm:text-6xl text-4xl font-semibold"
            {...slideInView()}
          >
            You don’t have to carry this on your own.
          </motion.h1>
          <p className="sm:text-xl">
            If any of these feel familiar, therapy can help:
          </p>
          <motion.ul
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="list-disc sm:text-xl flex flex-col gap-2"
          >
            {obj.map((val, i) => (
              <motion.li key={i} {...slideInView()}>
                {val.data}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p {...slideInView()} className="sm:text-xl">
            With steady, collaborative support, we’ll work toward greater
            clarity, regulation, and emotional balance.
          </motion.p>
        </div>
        <motion.button
          {...slideInView()}
        {...hoverStyle({border:"#f3bae0",bg:"#f3bae0",color:"#a564a5"})}
          className="flex  justify-center items-center gap-4 p-5 border font-semibold uppercase cursor-pointer "
        >
          Work With Me
          <MdArrowRightAlt className="sm:text-2xl text-xl " />
        </motion.button>
      </div>
    </div>
  );
};

export default WorkWithMe;

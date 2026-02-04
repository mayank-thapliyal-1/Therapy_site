"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideInView } from "../Animation/animation";
export const Background = () => {
  const [val, setVal] = useState(-1);
  const obj = [
    {
      head: "Education",
      info: "PsyD in Clinical Psychology — Example University, 2016",
    },
    {
      head: "Licensure",
      info: "Licensed Clinical Psychologist, California",
    },
    {
      head: "Certifications",
      info: "EMDR (EMDRIA‑approved training)",
    },
  ];
  return (
    <div className=" flex  items-center justify-center sm:h-140 h-130 p-10 sm:p-0 w-screen  font-mont bg-accent overflow-hidden ">
      <div className="flex flex-col w-180 items-center justify-center sm:gap-14 gap-7 ">
        <motion.h1
          {...slideInView()}
          className="sm:text-4xl text-center text-3xl font-semibold"
        >
          My Professional Background
        </motion.h1>
        <div className="flex flex-col gap-3 w-full">
          {obj.map((data, i) => (
            <motion.div
              key={i}
              {...slideInView()}
              className={`${i == 2 ? "border-y" : "border-t"}`}
            >
              <motion.div
                {...slideInView()}
                className="flex  items-center justify-between gap-2 sm:p-4 p-2"
              >
                <h2 className="sm:text-2xl text-xl">{data.head}</h2>
                <button
                  className="flex cursor-pointer"
                  onClick={() => setVal((prev) => (prev == i ? -1 : i))}
                >
                  <span className={` text-xl rotate-90  duration-200 font-extralight relative  `}>|</span>
                  <span
                    className={` text-xl ${val == i ? "rotate-90  " : "rotate-0 bottom-0.5"}   duration-200 font-extralight relative right-1.5 `}
                  >
                    |
                  </span>
                </button>
              </motion.div>
              <p className={`${val == i ? "block" : "hidden"} sm:p-5 p-2 sm:text-xl `}>
                {data.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className=" flex  items-center justify-center w-screen sm:p-20 p-10  font-mont bg-accent">
      <div className="flex flex-col gap-14">
        <motion.h1
          whileInView={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="sm:text-5xl text-3xl font-semibold"
        >
          My Professional Background
        </motion.h1>
        <div className="flex flex-col gap-3 w-full">
          {obj.map((data, i) => (
            <motion.div
              whileInView={{
                y: [50, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.5,
              }}
              className={`${i == 2 ? "border-y" : "border-t"}`}
              key={i}
            >
              <motion.div
                whileInView={{
                  y: [50, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex  items-center justify-between gap-2"
              >
               
                <h2 className="sm:text-3xl text-2xl">{data.head}</h2>
                 <button
                  className="flex cursor-pointer"
                  onClick={() => setVal((prev) => (prev == i ? -1 : i))}
                >
                  <span className="text-6xl font-extralight">-</span>
                  <span
                    className={` text-6xl ${val == i ? "rotate-0" : "rotate-90 top-1.5"}  duration-200 font-extralight relative right-4.5 `}
                  >
                    -
                  </span>
                </button>
              </motion.div>
              <p className={`${val == i ? "block" : "hidden"} p-5 text-xl`}>
                {data.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

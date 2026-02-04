"use client";
import img1 from "../src/anxiety.jpg";
import img2 from "../src/trauma.jpg";
import img3 from "../src/burnout.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInView } from "../Animation/animation";
const Specialties = () => {
  const obj = [
    {
      head: "Anxiety",
      para: "Persistent worry, overthinking, or tension can make everyday life feel exhausting. Together, we’ll develop practical tools to help you feel calmer, more grounded, and in control.",
      img: img1,
    },
    {
      head: "Trauma",
      para: "Past experiences or traumatic events can quietly affect your confidence, relationships, and sense of safety. Therapy provides a safe, structured space to process, heal, and regain emotional balance.",
      img: img2,
    },
    {
      head: "Burnout",
      para: "High pressure, perfectionism, or chronic stress can leave you feeling drained and disconnected. We’ll work to reset patterns, restore balance, and develop sustainable ways of living and working.",
      img: img3,
    },
  ];
  return (
    <div className="sm:pt-28  sm:p-20 p-10 flex flex-col sm:gap-20 gap-10 items-center justify-around font-mont overflow-hidden">
      <motion.h1
        {...slideInView()}
        className="sm:text-6xl text-4xl font-semibold"
      >
        My Specialites
      </motion.h1>
      <div className="flex gap-7 sm:flex-row flex-col justify-around items-center w-screen sm:px-18 px-5">
        {obj.map((data, i) => (
          <div
            key={i}
            className="flex flex-col gap-7 bg-accent p-5 border border-primary py-10"
          >
            <motion.h2 {...slideInView()} className=" text-xl font-semibold">
              {data.head}
            </motion.h2>
            <p className="text-sm">{data.para}</p>
            <motion.div
              {...slideInView()}
              className="flex justify-center items-center"
            >
              <Image
                className="sm:h-72 sm:w-72 h-60 w-60 rounded-full object-cover"
                src={data.img}
                alt=""
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;

"use client";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
const GetStarted = () => {
  return (
    <div className=" font-mont bg-primary text-accent flex  items-center justify-center w-screen sm:h-[60vh] h-full py-20">
      <div className="flex flex-col items-center gap-10 sm:px-20 p-10 w-full">
        <motion.h2
          whileInView={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="sm:text-5xl text-3xl font-semibold"
        >
          Get started today.
        </motion.h2>
        <motion.p
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="sm:w-1/2 sm:text-2xl text-lg font-light"
        >
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </motion.p>
        <motion.button
         whileHover={{
           backgroundColor: "#15173D",
           color:"white",
           borderColor:"#15173D"
          }}
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex cursor-pointer gap-2 items-center uppercase border border-white sm:py-5 py-3 sm:px-10 px-5 "
        >
          Get In Touch   <MdArrowRightAlt className="text-2xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default GetStarted;

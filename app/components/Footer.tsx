"use client";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="flex flex-col w-screen font-mont">
      <div className="flex sm:flex-row flex-col items-center sm:gap-0 gap-5 justify-around sm:items-start w-full py-20">
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col justify-around items-center sm:gap-5 gap-2"
        >
          <h1 className="sm:text-5xl text-2xl font-semibold">Dr. Maya Reynolds</h1>
          <p className="sm:text-xl text-md">
            23th Street 45 W <br />
            Santa Monica, CA
          </p>
          <div className="sm:text-xl text-md  underline cursor-pointer">
            Maya199@gmail.com <br />
            (555) 567-854
          </div>
        </motion.div>
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-center justify-around sm:gap-5 gap-2"
        >
          <h1 className="sm:text-3xl  text-2xl font-semibold">Home</h1>
          <p className="sm:text-xl">
            Monday-Friday <br /> 10am-6pm
          </p>
        </motion.div>
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col sm:gap-5 gap-2"
        >
          <h1 className="sm:text-4xl  text-2xl font-semibold">Find</h1>
          <div className="sm:text-xl underline flex flex-col gap-2">
            <a href="">home</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
        </motion.div>
      </div>
      <div className="bg-accent flex flex-col justify-center items-center w-full py-20 gap-7">
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col sm:flex-row gap-4 items-center underline"
        >
          <a href="">Privacy & Cookies Policy</a>{" "}
          <a href=""> Good Faith Estimate</a>{" "}
          <a href="">Website Terms & Conditions</a> <a href="">Disclaimer</a>
        </motion.div>
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col sm:flex-row items-center"
        >
          Website Template Credits:{" "}
          <a className="underline" href="">
            Go Bloom Creative
          </a>
        </motion.div>
        <motion.div
          whileInView={{
            y: [40, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
        >
          All Rights Reserved © 2024 Mayank, LLC.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

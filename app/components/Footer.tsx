"use client";
import { motion } from "framer-motion";
import { slideInView } from "../Animation/animation";
const Footer = () => {
  return (
    <div className="flex flex-col w-screen font-mont">
      <div className="flex sm:flex-row  w-full flex-col items-center  gap-5 justify-around sm:items-start py-20 sm:px-20 overflow-hidden">
        <motion.div
          {...slideInView()}
          className="flex flex-col w-full justify-around sm:items-start items-center sm:gap-5 gap-2"
        >
          <h1 className="sm:text-4xl text-2xl font-semibold ">Dr. Maya Reynolds</h1>
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
          {...slideInView()}
          className="flex flex-col w-full sm:w-fit   sm:items-center  items-center justify-around sm:gap-5 gap-2"
        >
          <h1 className="sm:text-3xl  text-2xl font-semibold">Home</h1>
          <p className="sm:text-xl text-center sm:w-50">
            Monday-Friday <br /> 10am-6pm
          </p>
        </motion.div>
        <motion.div
        {...slideInView()}
          className="flex w-full sm:w-fit items-center flex-col sm:gap-5 gap-2"
        >
          <h1 className="sm:text-3xl  text-2xl font-semibold">Find</h1>
          <div className="sm:text-xl underline md:w-full flex items-center flex-col gap-2">
            <a href="">home</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
        </motion.div>
      </div>
      <div className="bg-accent sm:text-lg flex flex-col  justify-center items-center w-full py-20 gap-7">
        <motion.div
         {...slideInView()}
          className="flex flex-col  sm:flex-row gap-4 items-center underline"
        >
          <a href="">Privacy & Cookies Policy</a>{" "}
          <a href=""> Good Faith Estimate</a>{" "}
          <a href="">Website Terms & Conditions</a> <a href="">Disclaimer</a>
        </motion.div>
        <motion.div
         {...slideInView()}
          className="flex flex-col sm:flex-row items-center"
        >
          Website Template Credits:{" "}
          <a className="underline" href="">
            Go Bloom Creative
          </a>
        </motion.div>
        <motion.div
         {...slideInView()}
        >
          All Rights Reserved © 2024 Mayank, LLC.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

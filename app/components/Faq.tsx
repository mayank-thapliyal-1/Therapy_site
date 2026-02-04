"use client";
import Image from "next/image";
import { useState } from "react";
import img from "../src/faq.jpg";
import { motion } from "framer-motion";
const Faq = () => {
  const [val, setVal] = useState(-1);
  console.log(val);
  const obj = [
    {
      question: "Do you take insurance?",
      answer:
        "I don’t bill insurance directly, but I can provide a superbill for out‑of‑network reimbursement.",
    },
    {
      question: "What are your rates?",
      answer: "Sessions are private‑pay. Please reach out for current fees.",
    },
    {
      question: "Do you have any openings?",
      answer:
        "Availability changes week to week — contact me to check current openings and schedule a brief consultation.",
    },
  ];
  return (
    <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 sm:p-2 p-5 justify-around sm:items-center w-screen sm:h-screen overflow-hidden h-full">
      <motion.div
        whileInView={{
          y: [100, 0],
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-screen s:w-full flex-1 flex items-center justify-center"
      >
        <Image
          className="sm:h-160 sm:w-120 w h-80 w-50 rounded-t-full"
          src={img}
          alt=""
        />
      </motion.div>
      <div className="flex flex-col sm:gap-10 gap-6 sm:w-1/2 sm:p-10 w-full">
        <motion.h1
          whileInView={{
            y: [20, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
          }}
          className="sm:text-5xl text-4xl "
        >
          FAQs
        </motion.h1>
        <div className="flex flex-col  ">
          {obj.map((data, index) => (
            <motion.div
              whileInView={{
                y: [50, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.5,
              }}
              className={`${index == 2 ? "border-y" : "border-t"} sm:py-5 py-3`}
              key={index}
            >
              <motion.div
                whileInView={{
                  y: [50, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex  items-center gap-2"
              >
                <button
                  className="flex cursor-pointer"
                  onClick={() => setVal((prev) => (prev == index ? -1 : index))}
                >
                  <span className="text-6xl font-extralight">-</span>
                  <span
                    className={` text-6xl ${val == index ? "rotate-0" : "rotate-90 top-1.5"}  duration-200 font-extralight relative right-5 `}
                  >
                    -
                  </span>
                </button>

                <p className="sm:text-4xl text-2xl">{data.question}</p>
              </motion.div>
              <p className={`${val == index ? "block" : "hidden"} text-xl`}>
                {data.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

"use client";
import { motion } from "framer-motion";
import pic from "../src/office1.jpeg";
import pic2 from "../src/office2.jpeg";
import Image from "next/image";
import { slideInView } from "../Animation/animation";
const Office = () => {
  const obj = [
    {
      head: "location",
      info: "123th Street 45 W, Santa Monica, CA 90401",
    },
    {
      head: "Sessions",
      info: "In‑person + telehealth",
    },
    {
      head: "Environment",
      info: "Calm, private, grounding",
    },
  ];
  return (
    <div className="font-mont w-screen flex sm:flex-row flex-col-reverse sm:h-screen h-full items-center sm:p-10 p-5 bg-accent overflow-hidden ">
      <div className="flex sm:gap-20 gap-10 flex-col  flex-1 sm:pt-20 sm:px-10 h-full ">
        <span className="flex flex-col gap-2">
          <motion.h1
            {...slideInView()}
            className="sm:text-7xl text-4xl font-semibold"
          >
            Our Office
          </motion.h1>
          <h2 className="sm:text-xl text-sm">
            A calm, private space designed to help you settle and feel grounded.
          </h2>
        </span>
        <div className="flex flex-col sm:gap-14 gap-5">
          <motion.p
           {...slideInView()}
            className="sm:text-2xl text-md"
          >
            Located in Santa Monica, the office offers natural light,
            comfortable seating, and a quiet, uncluttered environment. Many
            clients say the space itself helps them feel more at ease as they
            arrive and begin their session.
          </motion.p>
          <div className="flex flex-col sm:gap-1 gap-2 ">
            {obj.map((data, i) => (
              <motion.span
                 key={i}
                {...slideInView()}
               
                className="flex sm:gap-2  sm:text-xl text-md"
              >
                <h2 className="font-semibold">{data.head}</h2>-
                <p>{data.info}</p>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center sm:p-6">
        <motion.div
           {...slideInView()}
        >
          {" "}
          <Image
            className=" relative sm:top-38 top-10 sm:h-180 sm:w-130 h-100 w-60 rounded-t-full"
            src={pic2}
            alt=""
          />
        </motion.div>
        <motion.div
           {...slideInView()}
        >
          {" "}
          <Image
            className="sm:h-80 sm:w-80 h-40 w-40 rounded-full relative sm:bottom-35 bottom-20 sm:left-42 left-20 border border-foreground"
            src={pic}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Office;

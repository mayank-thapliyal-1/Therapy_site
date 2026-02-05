"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { slideInView } from "../Animation/animation";
const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [ismobile,setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setScrolled(currentY > 10);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
   useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768 ); 
    };

    checkSize(); // run once on load
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <AnimatePresence>
      <div className="font-mont">
        {(show || active) && (
          <motion.nav
            className={` fixed flex  items-center  justify-between px-6 py-3 top-0 left-0 w-full z-50 transition-all duration-300 bg-background
      }`}
          >
            <button
              onClick={() => setActive((prev) => !prev)}
              className={`sm:hidden flex sm:${()=>setActive(false)}`}
            >
              <span
                className={`${active ? " rotate-45 top-0 left-1.5" : "rotate-90 top-1 left-1.5"} relative   text-4xl font-extralight duration-100 `}
              >
                |
              </span>
              <span
                className={`${active ? "-rotate-45 right-1.5" : "rotate-90 bottom-1 right-1"} relative text-4xl font-extralight`}
              >
                |
              </span>
            </button>
            <h1 className="sm:text-4xl  text-2xl font-semibold">
              Maya Reynolds
            </h1>
            <motion.div
            {...slideInView({y:20})}
             className=" sm:flex hidden gap-2 items-center text-xl underline">
              <button className="cursor-pointer">Blog</button>
              <button className="cursor-pointer">Contact</button>
            </motion.div>
          </motion.nav>
        )}
        <div
          className={`${(active && ismobile) ? "flex" : "hidden"}  fixed  z-1 h-screen w-screen bg-background  text-2xl items-center justify-center`}
        >
          <motion.div
            {...slideInView({once:false})}
            className="flex  flex-col gap-4 items-center"
          >
            <a href="">Block</a>
            <a href="">Contact</a>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Nav;

import React from "react";
import Mainbg from "../assets/mainbg.svg";
import Laptopimg from "../assets/laptopimg.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-16 bg-cover bg-center items-center justify-between text-center flex flex-col relative overflow-hidden p-4"
        style={{ backgroundImage: `url(${Mainbg})` }}>
        <div className="mt-16 max-w-3xl">
          <motion.h1 initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{type: "spring",duration: 0.7,stiffness: 120,damping: 14,}}
           className="text-white text-3xl md:text-[64px] font-light leading-tight font-raleway">
            An ultra effiecient <br />
            <span className="font-light">xxx for your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{type: "spring", duration: 0.7, stiffness: 120, damping: 14, delay: 0.2,}}className="text-gray-400 text-sm md:text-[18px] font-light mt-2 font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring",stiffness: 120,damping: 14,delay: 0.4,}}
           className="inline-block mt-6 rounded-full p-[1.5px] bg-gradient-to-r from-[#D80303] to-[#000000]">
            <button className="px-3 py-2 md:px-[38px] md:py-[14px] rounded-full bg-[#1D1D1D] text-gray-300 hover:text-white transition text-[11px] md:text-[18px] font-raleway">
              Discover More
            </button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}transition={{type: "spring",stiffness: 120,damping: 14,delay:0.5,}} className="flex justify-center items-center my-12">
          <img src={Laptopimg} alt="Laptop" className="w-[280px] md:w-[1500px] drop-shadow-2xl"/>
        </motion.div>

        <div className="max-w-7xl mb-10">
          <p className="text-gray-400 text-sm md:text-[42px] leading-tight font-raleway">
            <span className="text-[#454545]">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Vivamu luctus ero aliquet convallis
            ultricies. Mauris <span className="text-[#454545]">augue</span>{" "}
            massa, ultricies non ligula suspendisse
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;



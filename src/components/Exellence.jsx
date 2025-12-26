import React from "react";
import Exellenceimg from '../assets/exellenceimg.svg'
import { motion } from "framer-motion";


const Exellence = () => {
  return (
    <div className="w-full bg-[#0e0e0e] py-12 font-raleway mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* left.............. */}
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}
           className="w-full h-[420px] md:h-[520px] overflow-hidden rounded-md">
            <img src={Exellenceimg} alt="Office" className="w-[350px] h-[700px] object-cover rounded-xs"/>
          </motion.div>

          {/* right......................................... */}
          <div className="text-gray-300">
            <motion.p initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.5, ease: "easeOut",  delay: 0.5, }} className="text-[30px] font-light mb-2">Celebrating</motion.p>

            <motion.h2 initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.6, ease: "easeOut",  delay: 0.6, }} className="text-white leading-none mb-6">
              <span className="text-[60px] md:text-[78px] font-bold">
                25 Years 
              </span>
              <span className="ml-2 text-[28px] md:text-[34px] font-light">
                of Excellence
              </span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.8, ease: "easeOut",  delay: 0.8, }} className="space-y-4 text-[18px] font-light leading-relaxed text-gray-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Nulla tristique efficitur nisi, at scelerisque nisl iaculis id.
                Quisque aliquet, sem at Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. scelerisque convallis, risus nisl
                tincidunt neque, vitae sodales purus erat sit amet eros.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Exellence;

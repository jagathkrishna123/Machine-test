

import React from "react";
import cardbg from "../assets/cardbgimg.svg";
import { cardTitles } from "../constants/ProgramData";
import { motion } from "framer-motion";

const Industries = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row max-w-7xl mx-auto items-start md:items-center justify-between font-raleway px-4 sm:px-6 lg:px-8 py-6">
        <motion.p initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="font-light text-[26px] sm:text-[32px] md:text-[46px] max-w-xs leading-tight">
          Industries We Serve
        </motion.p>

        <motion.p initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-3xl text-[13px] sm:text-[15px] md:text-[18px] font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {cardTitles.map((item) => (
            <div key={item.id}
              className="group mx-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[190px] aspect-square [perspective:1000px] cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* front sideee...... */}
                <div className=" absolute inset-0 [backface-visibility:hidden] flex items-center justify-center text-center text-white text-[14px] sm:text-[26px] font-raleway rounded-sm bg-cover bg-center p-2 "
                  style={{ backgroundImage: `url(${cardbg})` }}>
                  {item.title}
                </div>

                <div
                  className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center text-center text-[12px] sm:text-[16px] font-light font-raleway rounded-sm bg-[#D80303] text-white p-2 [transform:rotateY(180deg)]">
                  Iron and steel industry is categorized by huge material
                  handling
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industries;

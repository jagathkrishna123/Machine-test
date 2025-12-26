import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import { motion } from "framer-motion";


const images = [Img1, Img2, Img3, Img4, Img5, Img6];

// Layout definition (4 cols × 2 rows)
const gridLayout = [0, 1, 2, null, null, 3, 4, 5];

const OurStory = () => {
  return (
    <div className="w-full p-3 py-12 md:py-20  max-w-7xl mx-auto relative">
      
        <div className="flex flex-col mt-12 md:mt-20 pt-12 md:pt-20 font-raleway">
          <motion.h2 initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.6, ease: "easeOut",  delay: 0.6, }} className="text-[32px] md:text-[46px] font-light mb-1 ">Our Story</motion.h2>
          <motion.p initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.8, ease: "easeOut",  delay: 0.8, }} className="text-gray-600 mb-6 text-[16px] md:text-[22px]">
            All in One Web Solution for Your Business
          </motion.p>

          <motion.p  initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{type: "spring", duration: 0.7,stiffness: 120, damping: 14,}} className="text-black text-[13px] md:text-[18px] font-light leading-relaxed mb-4 max-w-xl">
            Aenean non accumsan ante. Duis nisl felis, condimentum id varius sit
            amet, placerat vitae neque. Maecenas scelerisque, massa in pulvinar
            feugiat, enim purus tincidunt tellus, at consectetur nisi nisl nec
            justo. Donec non ante ac nisl varius ullamcorper. Vivamus convallis
            massa quis fermentum lacinia. <br /> Phasellus vulputate, nunc nec
            iaculis interdum, tortor nisl egestas lorem, vitae interdum ipsum
            justo vitae mi. Cras accumsan nisl a est imperdiet, ac hendrerit
            lacus posuere.
          </motion.p>

          <motion.p  initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{type: "spring", duration: 0.7,stiffness: 120, damping: 14,}} className="text-black text-[13px] md:text-[18px] font-light leading-relaxed mb-4">
            Aenean non accumsan ante. Duis nisl felis, condimentum id varius sit
            amet, placerat vitae neque. Maecenas scelerisque, massa in pulvinar
            feugiat, enim purus tincidunt tellus, at consectetur nisi nisl nec
            justo. Donec non ante ac nisl varius ullamcorper. Vivamus convallis
            massa quis fermentum lacinia. Phasellus vulputate, nunc nec iaculis
            interdum, tortor nisl egestas lorem, vitae interdum ipsum justo
            vitae mi. Cras accumsan nisl a est imperdiet, ac hendrerit lacus
            posuere. Proin varius justo vitae massa dictum, sit amet iaculis
            orci pharetra. Nunc vitae varius urna.
          </motion.p>

          
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-1 md:absolute max-w-3xl right-0 top-20">
          {gridLayout.map((imgIndex, i) => (
            <div key={i} className="">
              {imgIndex !== null && (
                <img
                  src={images[imgIndex]}
                  alt={`Img${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default OurStory;

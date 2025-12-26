import React from "react";
import ClientLogo from "../assets/clientlogo.svg";

const OurClients = () => {
  return (
    <div className="w-full bg-white">

      <div className="relative w-full overflow-hidden h-[72px] md:h-[120px]">
        <div
          className="absolute left-0 top-0 h-full w-[120px] sm:w-[180px] md:w-[360px] bg-black flex items-center pl-4 sm:pl-8 md:pl-20 z-10"
          style={{clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",}} >
          <h2 className="
            text-white font-light font-raleway
            text-[14px] sm:text-[20px] md:text-[40px]">
            Our clients
          </h2>
        </div>

        <div className="absolute top-0 right-0 h-full left-[120px] sm:left-[180px] md:left-[360px] overflow-hidden flex items-center">
          <div className="flex items-center gap-10 sm:gap-14 md:gap-20 whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }).map((_, index) => (
              <img key={index} src={ClientLogo} alt="Client logo" className="h-[44px] md:h-[56px] w-auto transition"/>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-center px-4 sm:px-6">
        <p className="font-light font-raleway text-[#9E9797] text-center text-[14px] sm:text-[16px] md:text-[18px] mt-6 sm:mt-8 md:mt-12 max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
      </div>

    </div>
  );
};

export default OurClients;

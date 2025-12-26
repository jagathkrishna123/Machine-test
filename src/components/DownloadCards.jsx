import React from "react";
import { downloadCards } from "../constants/ProgramData";

const DownloadCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {downloadCards.map((card) => (
          <div key={card.id} className={`${card.bgColor} rounded-sm p-8 flex flex-col items-start text-center justify-between max-w-[444px] min-h-[450px] md:min-h-[600px] relative mx-auto w-full relative`} >
            <h2
              className={`text-2xl md:text-[25px] font-light text-start leading-snug mb-6 max-w-[250px] w-full ${card.titleColor}`}>
              {card.title}
            </h2>

            <img src={card.image} alt="device" className="w-[260px] md:w-[470px] mb-8 absolute top-28 left-10 " />

            <div className="w-full flex flex-wrap justify-center items-center gap-1">
            {card.stores.map((store) => (
              <img key={store.id}
                src={store.img} alt={store.alt} className="h-8 cursor-pointer hover:scale-105 transition"/>
            ))}
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadCards;

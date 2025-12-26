import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../constants/ProgramData";
import { motion } from "framer-motion";


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#231F20] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 font-raleway">
        {/*left ............................................................................... */}
        <div className="space-y-6">
          <motion.h2 initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.6, ease: "easeOut",  delay: 0.6, }} className="text-[45px] md:text-[60px] font-light leading-tight">
            Frequently asked <br /> Questions
          </motion.h2>

          <motion.p initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.8, ease: "easeOut",  delay: 0.8, }} className="text-white text-[18px] font-light max-w-md">
            Nulla tristique efficitur nisi, at scelerisque nisl iaculis id.
            Quisque aliquet, sem at scelerisque convallis.
          </motion.p>
          {/* black box............................................ */}
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.9, ease: "easeOut",  delay: 0.9, }} className="bg-[#161415] rounded-xl p-6 w-full max-w-[527px] mt-10">
            <h3 className="text-[30px] md:text-[40px] font-light mb-4 max-w-xs leading-none">
              Still Have a question ?
            </h3>
            <button className="bg-[#D80303] transition px-6 py-2 rounded text-sm mt-10">
              Sent Email
            </button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{duration: 0.6, ease: "easeOut",  delay: 0.6, }} className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#161415] rounded-lg overflow-hidden">
              <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center px-6 py-4 text-left">
                <span className="text-sm">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-red-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}/>
              </button>

              {/* Answer...................... */}
              <div className={`px-6 text-gray-400 text-sm transition-all duration-300 ease-in-out ${activeIndex === index
                    ? "max-h-40 pb-4 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;

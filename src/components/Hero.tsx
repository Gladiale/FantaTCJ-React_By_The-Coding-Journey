import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
// components
import Navbar from "./Navbar";
import HeroDataInfo from "./HeroDataInfo";
// 型
import { HeroDataType } from "../types/types";

const HeroData: HeroDataType[] = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem.",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Fanta",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem.",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Fanta",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem.",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(HeroData[0]);

  return (
    <motion.div
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
    >
      {/* navbar component */}
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        {/* Data Info */}
        <HeroDataInfo
          HeroData={HeroData}
          activeData={activeData}
          setActiveData={setActiveData}
        />
        {/* Hero Image */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.4,
                },
              }}
              src={activeData.image}
              alt=""
              className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.0,
                ease: easeInOut,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
              }}
              className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Whatsapp Icon */}
        <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

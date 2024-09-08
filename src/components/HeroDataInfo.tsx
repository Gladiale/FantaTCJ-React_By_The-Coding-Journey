import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { slideRight } from "../utils/animations";
import { type HeroDataType } from "../types/types";

type PropsType = {
  HeroData: HeroDataType[];
  activeData: HeroDataType;
  setActiveData: React.Dispatch<React.SetStateAction<HeroDataType>>;
};

const HeroDataInfo = ({ HeroData, activeData, setActiveData }: PropsType) => {
  const handleActiveData = (data: HeroDataType) => {
    setActiveData(data);
  };

  return (
    <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1 relative z-40">
      <div className="space-y-5 text-center md:text-left">
        <AnimatePresence mode="wait">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 10,
              mixBlendMode: "difference",
            }}
          >
            <motion.h1
              key={activeData.id}
              variants={slideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
            >
              {activeData.title}
            </motion.h1>
          </UpdateFollower>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeData.id}
            variants={slideRight(0.4)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-sm leading-loose text-white/80"
          >
            {activeData.subtitle}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <UpdateFollower
            mouseOptions={{
              // backgroundColor: activeData.bgColor,
              backgroundColor: "purple",
              zIndex: 9999,
              followSpeed: 0.5,
              rotate: -720,
              scale: 6,
              backgroundElement: (
                <div>
                  <img src={activeData.image} alt="" />
                </div>
              ),
            }}
          >
            <motion.button
              key={activeData.id}
              variants={slideRight(0.6)}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{ color: activeData.bgColor }}
              className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
            >
              Order Now
            </motion.button>
          </UpdateFollower>
        </AnimatePresence>

        {/* list separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
          className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
        >
          <div className="w-20 h-[1px] bg-white"></div>
          <p>TOP RECOMMENDATION</p>
          <div className="w-20 h-[1px] bg-white"></div>
        </motion.div>

        {/* image swither */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
          className="grid grid-cols-3 gap-10"
        >
          {HeroData.map((data) => (
            <UpdateFollower
              key={data.id}
              mouseOptions={{
                backgroundColor: data.bgColor,
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 5,
                text: "View Details",
                textFontSize: "3px",
              }}
            >
              <div
                onClick={() => handleActiveData(data)}
                className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
              >
                <div className="flex justify-center">
                  <img
                    src={data.image}
                    alt=""
                    className={`w-[80px] img-shadow ${
                      activeData.image === data.image
                        ? "opacity-100 scale-110"
                        : "opacity-50"
                    }`}
                  />
                </div>
                <div className="text-center !mt-6 space-y-1">
                  <p className="text-base line-through opacity-50">{data.price}</p>
                  <p className="text-xl font-bold">{data.price}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDataInfo;

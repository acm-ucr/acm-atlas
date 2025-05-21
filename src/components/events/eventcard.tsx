"use client";

// import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

type EventCardProps = {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
  isInitiallyExpanded: boolean;
};

const eventCardAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.65, rotate: -1 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const eventcard = ({
  day,
  date,
  title,
  description,
  isInitiallyExpanded,
}: EventCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  return (
    <motion.div
      className="flex w-11/12 items-center gap-6 rounded-3xl bg-[#FFFFFF61] p-4 sm:h-1/3 sm:w-4/5 sm:pb-12 lg:h-1/3 lg:w-3/4"
      variants={eventCardAnimation}
      initial="hidden"
      whileInView="show"
      whileHover={{
        y: [-3, 0, -3],
        transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
      }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="mb-20 hidden sm:mb-0 sm:flex sm:h-full sm:w-1/5 sm:flex-col sm:items-center sm:justify-start sm:pt-7 lg:h-full lg:w-1/5 lg:items-center lg:justify-center lg:pt-3">
        <div className="font-questrial sm:text-quant-blue-100 text-center text-base uppercase text-[#DDF0FE] sm:text-left sm:text-2xl lg:text-center lg:text-xl">
          {day}
        </div>
        <div className="font-questrial text-quant-white -mt-2 text-4xl font-bold sm:-mt-0 sm:text-left sm:text-6xl sm:font-normal lg:text-center lg:text-7xl">
          {date}
        </div>
      </div>
      <div className="flex w-full flex-col sm:h-full lg:h-full">
        <div className="flex gap-5">
          <div className="sm:hidden">
            <div className="font-questrial text-center text-base uppercase text-[#DDF0FE]">
              {day}
            </div>
            <div className="font-questrial -mt-2 text-4xl font-bold text-[#E8EDF3]">
              {date}
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <div className="font-questrial text-quant-white mb-1 justify-start text-xl font-bold sm:pb-0 sm:pt-10 sm:text-2xl lg:text-3xl">
                {title}
              </div>
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-quant-blue-100 rounded-full p-2 transition hover:bg-white/20 sm:hidden"
              >
                {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
            <div className="lg:h-2/8 mt-1 flex w-fit flex-row gap-3 sm:mt-0 sm:gap-5"></div>
            {isExpanded && (
              <div className="mt-2 text-xs text-[#BDBDBD] transition-opacity duration-300 sm:hidden">
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="sm:w-5/7 font-roboto text-quant-gray hidden pt-3 text-xs sm:flex sm:h-full sm:pt-3 sm:text-base lg:h-full lg:w-5/6 lg:pt-2">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default eventcard;

"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgramProps {
  textColor: string;
  backgroundColor: string;
  image: StaticImageData;
}

const Joinus = ({ textColor, backgroundColor, image }: ProgramProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center text-3xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl"
        >
          JOIN NOW
        </motion.p>
        <div className="flex justify-center py-4 md:py-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/"
              className={`rounded-lg p-2 text-2xl md:mt-0 md:px-10 md:py-4 md:text-4xl ${textColor} ${backgroundColor}`}
            >
              Apply Here!
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image src={image} alt="Join Now" className="rounded-2xl md:w-10/12" />
      </motion.div>
    </div>
  );
};

export default Joinus;

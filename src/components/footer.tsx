"use client";
import Image from "next/image";
import ACMLogo from "@/public/logos/acm.webp";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      {/*Desktop Footer*/}
      <div className="mx-auto hidden w-11/12 flex-col md:flex">
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <div className="col-span-1 grid-cols-6 justify-items-center py-5 md:grid">
          <div className="col-span-2 flex flex-col justify-around">
            <Image src={ACMLogo} alt="ACM Logo" className="w-[50%] md:w-20" />
            <p className="text-4xl font-semibold text-acm-gray-500">ACM@UCR</p>
            <p className="text-xl text-acm-gray-500">
              Association of Computing Machinery
            </p>
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/acm_ucr/">
                <RiInstagramFill className="text-2xl text-acm-blue-700" />
              </Link>
              <Link href="https://discord.gg/qsHw6dhmmY">
                <FaDiscord className="text-2xl text-acm-blue-700" />
              </Link>
              <Link href="https://www.linkedin.com/company/acm-ucr">
                <FaLinkedin className="text-2xl text-acm-blue-700" />
              </Link>
              <Link href="https://github.com/acm-ucr">
                <FaGithub className="text-2xl text-acm-blue-700" />
              </Link>
              <Link href="https://medium.com/@contact.acmucr">
                <FaMedium className="text-2xl text-acm-blue-700" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Resources
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/hacks/hackpacks">Hackpacks</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/templateresume">Template Resume</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="https://github.com/SimplifyJobs/Summer2025-Internships">
                  CS Internships List
                </Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="https://github.com/SimplifyJobs/New-Grad-Positions">
                  CS Jobs List
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Pages
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/about">About</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/board">Board</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/programs/overview">Programs</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/hacks/overview">Hacks</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/events">Events</Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="/join">Join Us</Link>
              </motion.div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Contact
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link
                  href="mailto:contact.acmucr@gmail.com"
                  className="flex items-center gap-2"
                >
                  <MdEmail className="text-2xl text-acm-blue-700" />
                  <p>contact.acmucr@gmail.com</p>
                </Link>
              </motion.div>
              <motion.div whileHover={{ opacity: 0.75 }}>
                <Link href="https://www.google.com/maps/place/Winston+Chung+Hall,+Riverside,+CA+92507/@33.975265,-117.328515,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcae5acf0fa1e7:0xa67be5dc0009c039!8m2!3d33.975265!4d-117.3259401!16s%2Fg%2F12hy0dvmg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">
                  <div className="flex gap-2">
                    <FaLocationDot className="text-2xl text-acm-blue-700" />
                    <div>
                      <p>900 University Ave.</p>
                      <p>Winston Chung Hall, Room 127</p>
                      <p>Riverside, CA 92521</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <p className="flex justify-center py-5 text-acm-gray-400">
          © ACM at UCR 2025. Made with 💙 from ACM Spark.
        </p>
      </div>

      {/*Mobile Footer*/}
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-acm-gray-500 md:hidden">
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <Image src={ACMLogo} alt="ACM Logo" className="w-32" />
        <p className="text-4xl font-semibold text-acm-gray-500">ACM@UCR</p>
        <p className="text-acm-gray-500">Association of Computing Machinery</p>
        <div className="flex gap-6 text-acm-blue-700">
          <Link href="https://www.instagram.com/acm_ucr/">
            <RiInstagramFill className="text-4xl" />
          </Link>
          <Link href="https://discord.gg/qsHw6dhmmY">
            <FaDiscord className="text-4xl" />
          </Link>
          <Link href="https://www.linkedin.com/company/acm-ucr">
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link href="https://github.com/acm-ucr">
            <FaGithub className="text-4xl" />
          </Link>
          <Link href="https://medium.com/@contact.acmucr">
            <FaMedium className="text-4xl" />
          </Link>
        </div>
        <div className="text-center text-sm">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col">
              <p className="pb-3 text-left text-2xl font-semibold text-acm-gray-500">
                Resources
              </p>
              <div className="flex flex-col text-left text-lg font-light text-acm-gray-400">
                <Link href="/hacks/hackpacks">Hackpacks</Link>
                <Link href="/templateresume">Template Resume</Link>
                <Link href="https://github.com/SimplifyJobs/Summer2025-Internships">
                  CS Internships List
                </Link>
                <Link href="https://github.com/SimplifyJobs/New-Grad-Positions">
                  CS Jobs List
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="pb-3 text-left text-2xl font-semibold text-acm-gray-500">
                Pages
              </p>
              <div className="flex flex-col text-left text-lg font-light text-acm-gray-400">
                <Link href="/about">About</Link>
                <Link href="/board">Board</Link>
                <Link href="/programs/overview">Programs</Link>
                <Link href="/hacks/overview">Hacks</Link>
                <Link href="/events">Events</Link>
                <Link href="/join">Join Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
            Contact
          </p>
          <div className="flex flex-col text-xl font-light text-acm-gray-400">
            <Link
              href="mailto:contact.acmucr@gmail.com"
              className="flex items-center gap-2"
            >
              <MdEmail className="text-2xl text-acm-blue-700" />
              <p>contact.acmucr@gmail.com</p>
            </Link>
            <div className="flex gap-2 text-2xl">
              <FaLocationDot className="text-2xl text-acm-blue-700" />
              <div className="text-lg">
                <p>900 University Ave.</p>
                <p>Winston Chung Hall, Room 127</p>
                <p>Riverside, CA 92521</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <p className="flex justify-center py-5 text-xs text-acm-gray-400">
          © ACM at UCR 2025. Made with 💙 from ACM Spark.
        </p>
      </div>
    </>
  );
};

export default Footer;

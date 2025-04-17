import Image from "next/image";
import ACMLogo from "@/public/acm.webp";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex w-screen flex-col px-20">
      <div className="bg-acm-blue-400 h-0.5 w-full" />
      <div className="grid grid-cols-6 justify-items-center py-5">
        <div className="col-span-2 flex flex-col justify-around">
          <Image src={ACMLogo} alt="ACM Logo" className="w-22" />
          <p className="text-acm-gray-500 text-4xl font-semibold">ACM@UCR</p>
          <p className="text-acm-gray-500 text-xl">
            Association of Computing Machinery
          </p>
          <div className="flex w-1/2 justify-between">
            {/* change links */}
            <Link href="/">
              <RiInstagramFill className="text-acm-blue-700 h-6 w-6" />
            </Link>
            <Link href="/">
              <FaDiscord className="text-acm-blue-700 h-6 w-6" />
            </Link>
            <Link href="/">
              <FaLinkedin className="text-acm-blue-700 h-6 w-6" />
            </Link>
            <Link href="/">
              <FaGithub className="text-acm-blue-700 h-6 w-6" />
            </Link>
            <Link href="/">
              <FaMedium className="text-acm-blue-700 h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-acm-gray-500 pb-3 text-2xl font-semibold">
            Resources
          </p>
          <div className="text-acm-gray-400 flex flex-col text-lg font-light">
            {/* change links */}
            <Link href="/">Hackpacks</Link>
            <Link href="/">Template Resume</Link>
            <Link href="/">CS Internships List</Link>
            <Link href="/">CS Jobs List</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-acm-gray-500 pb-3 text-2xl font-semibold">Pages</p>
          <div className="text-acm-gray-400 flex flex-col text-lg font-light">
            <Link href="/about">About</Link>
            <Link href="/board">Board</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/hacks">Hacks</Link>
            <Link href="/events">Events</Link>
            <Link href="/resources">Resources</Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <p className="text-acm-gray-500 pb-3 text-2xl font-semibold">
            Contact
          </p>
          <div className="text-acm-gray-400 flex flex-col text-xl font-light">
            <div className="flex gap-2">
              <MdEmail className="text-acm-blue-700 h-6 w-6" />
              <p>contact.acmucr@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <FaLocationDot className="text-acm-blue-700 h-6 w-6" />
              <div>
                <p>900 University Ave.</p>
                <p>Winston Chung Hall, Room 127</p>
                <p>Riverside, CA 92521</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-acm-blue-400 h-0.5 w-full" />
      <p className="text-acm-gray-500 flex justify-center pt-5">
        © ACM at UCR 2025. Made with 💙 from ACM Spark.
      </p>
    </div>
  );
};

export default Footer;

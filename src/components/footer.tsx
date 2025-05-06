import Image from "next/image";
import ACMLogo from "@/public/logos/acm.webp";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col">
      <div className="h-0.5 w-full bg-acm-blue-400" />
      <div className="grid grid-cols-6 justify-items-center py-5">
        <div className="col-span-2 flex flex-col justify-around">
          <Image src={ACMLogo} alt="ACM Logo" className="w-20" />
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
            <Link href="/hackpacks">Hackpacks</Link>
            <Link href="/">Template Resume</Link>
            <Link href="https://github.com/SimplifyJobs/Summer2025-Internships">
              CS Internships List
            </Link>
            <Link href="https://github.com/SimplifyJobs/New-Grad-Positions">
              CS Jobs List
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="pb-3 text-2xl font-semibold text-acm-gray-500">Pages</p>
          <div className="flex flex-col text-lg font-light text-acm-gray-400">
            <Link href="/about">About</Link>
            <Link href="/board">Board</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/hacks">Hacks</Link>
            <Link href="/events">Events</Link>
            <Link href="/join">Join Us</Link>
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
            <div className="flex gap-2">
              <FaLocationDot className="text-2xl text-acm-blue-700" />
              <div>
                <p>900 University Ave.</p>
                <p>Winston Chung Hall, Room 127</p>
                <p>Riverside, CA 92521</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-acm-blue-400" />
      <p className="flex justify-center py-5 text-acm-gray-500">
        © ACM at UCR 2025. Made with 💙 from ACM Spark.
      </p>
    </div>
  );
};

export default Footer;

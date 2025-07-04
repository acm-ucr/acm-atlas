import Image from "next/image";
import ACMLogo from "@/public/logos/acm.webp";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
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
              <Link href="https://www.instagram.com/acm_ucr/" target="_blank">
                <RiInstagramFill className="text-2xl text-acm-blue-700 hover:opacity-65" />
              </Link>
              <Link href="https://discord.gg/qsHw6dhmmY" target="_blank">
                <FaDiscord className="text-2xl text-acm-blue-700 hover:opacity-65" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/acm-ucr"
                target="_blank"
              >
                <FaLinkedin className="text-2xl text-acm-blue-700 hover:opacity-65" />
              </Link>
              <Link href="https://github.com/acm-ucr" target="_blank">
                <FaGithub className="text-2xl text-acm-blue-700 hover:opacity-65" />
              </Link>
              <Link href="https://medium.com/@contact.acmucr" target="_blank">
                <FaMedium className="text-2xl text-acm-blue-700 hover:opacity-65" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Resources
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <Link href="/hacks/hackpacks" className="hover:opacity-65">
                Hackpacks
              </Link>
              <Link
                href="https://www.overleaf.com/read/rfmgjyrzdwbt#7ba657"
                target="_blank"
                className="hover:opacity-65"
              >
                Template Resume
              </Link>
              <Link
                href="https://github.com/SimplifyJobs/Summer2025-Internships"
                target="_blank"
                className="hover:opacity-65"
              >
                CS Internships List
              </Link>
              <Link
                href="https://github.com/SimplifyJobs/New-Grad-Positions"
                target="_blank"
                className="hover:opacity-65"
              >
                CS Jobs List
              </Link>
              <Link href="/alumni" className="hover:opacity-65">
                ACM Alumni
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Pages
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <Link href="/about" className="hover:opacity-65">
                About
              </Link>
              <Link href="/board" className="hover:opacity-65">
                Board
              </Link>
              <Link href="/programs/overview" className="hover:opacity-65">
                Programs
              </Link>
              <Link href="/hacks/overview" className="hover:opacity-65">
                Hacks
              </Link>
              <Link href="/events" className="hover:opacity-65">
                Events
              </Link>
              <Link href="/join" className="hover:opacity-65">
                Join Us
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <p className="pb-3 text-2xl font-semibold text-acm-gray-500">
              Contact
            </p>
            <div className="flex flex-col text-lg font-light text-acm-gray-400">
              <div className="hover:opacity-65">
                <Link
                  href="mailto:contact.acmucr@gmail.com"
                  className="flex items-center gap-2 hover:opacity-65"
                  target="_blank"
                >
                  <MdEmail className="text-2xl text-acm-blue-700" />
                  <p>contact.acmucr@gmail.com</p>
                </Link>
              </div>
              <div className="hover:opacity-65">
                <Link
                  href="https://www.google.com/maps/place/Winston+Chung+Hall,+Riverside,+CA+92507/@33.975265,-117.328515,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcae5acf0fa1e7:0xa67be5dc0009c039!8m2!3d33.975265!4d-117.3259401!16s%2Fg%2F12hy0dvmg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="flex gap-2 hover:opacity-65"
                >
                  <FaLocationDot className="text-2xl text-acm-blue-700" />
                  <div>
                    <p>900 University Ave.</p>
                    <p>Winston Chung Hall, Room 127</p>
                    <p>Riverside, CA 92521</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <p className="flex justify-center py-5 text-acm-gray-400">
          © ACM at UCR 2025. Made with 💙 from ACM Spark.
        </p>
      </div>

      {/* Mobile Footer */}
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-acm-gray-500 md:hidden">
        <div className="h-0.5 w-full bg-acm-blue-400" />
        <Image src={ACMLogo} alt="ACM Logo" className="w-32" />
        <p className="text-4xl font-semibold text-acm-gray-500">ACM@UCR</p>
        <p className="text-acm-gray-500">Association of Computing Machinery</p>
        <div className="flex gap-6 text-acm-blue-700">
          <Link
            href="https://www.instagram.com/acm_ucr/"
            target="_blank"
            className="hover:opacity-65"
          >
            <RiInstagramFill className="text-4xl" />
          </Link>
          <Link
            href="https://discord.gg/qsHw6dhmmY"
            target="_blank"
            className="hover:opacity-65"
          >
            <FaDiscord className="text-4xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/acm-ucr"
            target="_blank"
            className="hover:opacity-65"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            href="https://github.com/acm-ucr"
            target="_blank"
            className="hover:opacity-65"
          >
            <FaGithub className="text-4xl" />
          </Link>
          <Link
            href="https://medium.com/@contact.acmucr"
            target="_blank"
            className="hover:opacity-65"
          >
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
                <Link href="/hacks/hackpacks" className="hover:opacity-65">
                  Hackpacks
                </Link>
                <Link
                  href="https://www.overleaf.com/read/rfmgjyrzdwbt#7ba657"
                  target="_blank"
                  className="hover:opacity-65"
                >
                  Template Resume
                </Link>
                <Link
                  href="https://github.com/SimplifyJobs/Summer2025-Internships"
                  target="_blank"
                  className="hover:opacity-65"
                >
                  CS Internships List
                </Link>
                <Link
                  href="https://github.com/SimplifyJobs/New-Grad-Positions"
                  target="_blank"
                  className="hover:opacity-65"
                >
                  CS Jobs List
                </Link>
                <Link href="/alumni" className="hover:opacity-65">
                  ACM Alumni
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="pb-3 text-left text-2xl font-semibold text-acm-gray-500">
                Pages
              </p>
              <div className="flex flex-col text-left text-lg font-light text-acm-gray-400">
                <Link href="/about" className="hover:opacity-65">
                  About
                </Link>
                <Link href="/board" className="hover:opacity-65">
                  Board
                </Link>
                <Link href="/programs/overview" className="hover:opacity-65">
                  Programs
                </Link>
                <Link href="/hacks/overview" className="hover:opacity-65">
                  Hacks
                </Link>
                <Link href="/events" className="hover:opacity-65">
                  Events
                </Link>
                <Link href="/join" className="hover:opacity-65">
                  Join Us
                </Link>
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
              className="flex items-center gap-2 hover:opacity-65"
              target="_blank"
            >
              <MdEmail className="text-2xl text-acm-blue-700" />
              <p>contact.acmucr@gmail.com</p>
            </Link>
            <div className="flex gap-2 text-2xl">
              <Link
                href="https://www.google.com/maps/place/Winston+Chung+Hall,+Riverside,+CA+92507/@33.975265,-117.328515,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcae5acf0fa1e7:0xa67be5dc0009c039!8m2!3d33.975265!4d-117.3259401!16s%2Fg%2F12hy0dvmg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="flex gap-2 hover:opacity-65"
              >
                <FaLocationDot className="text-2xl text-acm-blue-700" />
                <div className="text-lg">
                  <p>900 University Ave.</p>
                  <p>Winston Chung Hall, Room 127</p>
                  <p>Riverside, CA 92521</p>
                </div>
              </Link>
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

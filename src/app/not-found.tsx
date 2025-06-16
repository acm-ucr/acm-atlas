import Image from "next/image";
import NotFoundKeys from "@/public/404keys.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[4%] flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="z-6 absolute right-[50%] top-[50%] h-[25vh] w-[90vw] rounded-full bg-acm-yellow-500 opacity-80 blur-3xl md:top-[40%] md:h-[80vh] md:opacity-40" />
      <div className="z-5 md:opacity-60% absolute right-[-5%] top-[45%] h-[40vh] w-[65vw] rounded-full bg-acm-blue-400 opacity-85 blur-3xl md:h-[60vh]" />
      <div className="z-4 absolute right-[50%] top-[35%] h-[30vh] w-[65vw] rounded-full bg-acm-blue-400 opacity-85 blur-3xl md:right-[35%] md:h-[50vh] md:opacity-60" />
      <div className="z-3 rop-[25%] absolute right-[-5%] h-[30vh] w-[75vw] rounded-full bg-acm-green-300 opacity-40 blur-3xl md:right-[5%] md:h-[55vh] md:w-[35vw]" />
      <Image
        src={NotFoundKeys}
        alt="404 Keys"
        className="z-10 h-auto w-3/4 max-w-xs pb-10 sm:max-w-md md:max-w-lg"
      />
      <p className="z-10 text-center text-3xl font-bold text-acm-navy sm:text-4xl md:text-6xl">
        PAGE NOT FOUND
      </p>
      <Link
        href="/"
        className="z-10 mb-16 mt-8 flex justify-center rounded-2xl bg-acm-blue-700 px-6 py-3 text-lg font-bold text-white sm:px-10 sm:py-4 sm:text-xl md:px-16 md:py-6 md:text-3xl"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

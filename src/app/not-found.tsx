import Image from "next/image";
import NotFoundKeys from "@/public/404keys.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[4%] flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute right-4 top-2/3 block h-32 w-32 rounded-full bg-acm-yellow-300 opacity-70 blur-3xl sm:right-[65%] sm:top-[75%] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute right-8 top-1/3 block h-32 w-32 rounded-full bg-acm-blue-700 opacity-50 blur-3xl sm:right-[62%] sm:top-[35%] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute right-1/4 top-1/2 block h-24 w-24 rounded-full bg-acm-blue-700 opacity-40 blur-3xl sm:right-[28%] sm:top-[50%] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute right-0 top-1/2 block h-24 w-24 rounded-full bg-acm-blue-700 opacity-40 blur-3xl sm:right-[-2%] sm:top-[50%] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute right-8 top-1/4 block h-20 w-20 rounded-full bg-acm-green-300 opacity-30 blur-3xl sm:right-[8%] sm:top-[27%] sm:h-[500px] sm:w-[500px]" />
      <Image
        src={NotFoundKeys}
        alt="404 Keys"
        className="z-10 h-auto w-3/4 max-w-xs pb-10 sm:max-w-md md:max-w-lg"
        priority
      />
      <p className="z-10 text-center text-3xl font-bold text-acm-navy sm:text-4xl md:text-6xl">
        PAGE NOT FOUND
      </p>
      <div className="z-10 pb-16 pt-8">
        <Link
          href="/"
          className="flex justify-center rounded-3xl bg-acm-blue-700 px-6 py-3 text-lg font-bold text-white hover:scale-105 hover:opacity-80 sm:px-10 sm:py-4 sm:text-xl md:px-16 md:py-6 md:text-3xl"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

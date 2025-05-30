import Image from "next/image";
import NotFoundKeys from "@/public/404keys.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[4%] flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="z-4 absolute right-[65%] top-[35%] h-[500px] w-[500px] rounded-full bg-acm-yellow-300 opacity-70 blur-3xl md:top-[75%]" />
      <div className="z-2 absolute right-[62%] top-[15%] h-[500px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl md:top-[35%]" />
      <div className="z-1 absolute right-[-4%] top-0 h-[500px] w-[700px] rounded-full bg-acm-blue-700 opacity-40 blur-3xl md:right-[28%] md:top-[50%]" />
      <div className="z-5 absolute right-[-2%] top-[50%] h-[500px] w-[500px] rounded-full bg-acm-blue-700 opacity-40 blur-3xl" />
      <div className="z-3 absolute right-[8%] top-[27%] h-[500px] w-[500px] rounded-full bg-acm-green-300 opacity-30 blur-3xl" />
      <Image
        src={NotFoundKeys}
        alt="404 Keys"
        className="md:pt-30 z-10 mt-0 w-3/4 pb-10 md:w-auto"
      />
      <p className="z-10 text-center text-6xl font-bold text-acm-navy">
        PAGE NOT FOUND
      </p>
      <Link
        href="/"
        className="z-10 mb-32 mt-16 flex justify-center rounded-3xl bg-acm-blue-700 px-12 py-6 text-3xl font-bold text-white hover:scale-105 hover:opacity-80 md:px-16"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

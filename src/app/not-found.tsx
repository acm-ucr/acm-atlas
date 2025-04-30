import Image from "next/image";
import NotFoundKeys from "@/public/404/404_Keys.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[4%] flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="bg-acm-yellow-300 absolute top-[75%] right-[65%] z-4 h-[500px] w-[500px] rounded-full opacity-70 blur-3xl" />
      <div className="bg-acm-blue-700 absolute top-[35%] right-[62%] z-2 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl" />
      <div className="bg-acm-blue-700 absolute top-[50%] right-[28%] z-1 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl" />
      <div className="bg-acm-blue-700 absolute top-[50%] right-[-2%] z-5 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl" />
      <div className="bg-acm-green-300 absolute top-[27%] right-[8%] z-3 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" />
      <Image src={NotFoundKeys} alt="404 Keys" className="z-10 pt-30 pb-10" />
      <p className="text-acm-navy z-10 text-6xl font-bold">PAGE NOT FOUND</p>
      <div className="z-10 pt-15 pb-35">
        <Link
          href="/"
          className="bg-acm-blue-700 flex justify-center rounded-3xl px-18 py-6 text-3xl font-bold text-white"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

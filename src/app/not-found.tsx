import Image from "next/image";
import NotFoundKeys from "@/public/404keys.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[4%] flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="z-4 absolute right-[65%] top-[75%] h-[500px] w-[500px] rounded-full bg-acm-yellow-300 opacity-70 blur-3xl" />
      <div className="z-2 absolute right-[62%] top-[35%] h-[500px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-1 absolute right-[28%] top-[50%] h-[500px] w-[500px] rounded-full bg-acm-blue-700 opacity-40 blur-3xl" />
      <div className="z-5 absolute right-[-2%] top-[50%] h-[500px] w-[500px] rounded-full bg-acm-blue-700 opacity-40 blur-3xl" />
      <div className="z-3 absolute right-[8%] top-[27%] h-[500px] w-[500px] rounded-full bg-acm-green-300 opacity-30 blur-3xl" />
      <Image src={NotFoundKeys} alt="404 Keys" className="pt-30 z-10 pb-10" />
      <p className="z-10 text-6xl font-bold text-acm-navy">PAGE NOT FOUND</p>
      <div className="z-10 pb-32 pt-16">
        <Link
          href="/"
          className="flex justify-center rounded-3xl bg-acm-blue-700 px-16 py-6 text-3xl font-bold text-white"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

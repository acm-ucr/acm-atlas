import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p className="text-acm-navy flex w-screen items-center justify-center text-4xl font-semibold">
        PAGE NOT FOUND
      </p>
      <button className="bg-acm-blue-700 my-5 rounded-md px-7 py-2 font-semibold text-white">
        <Link href="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default NotFound;

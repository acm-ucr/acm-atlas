import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-acm-navy text-4xl font-semibold">PAGE NOT FOUND</p>
      <Link
        className="bg-acm-blue-700 my-5 rounded-md px-7 py-2 font-semibold text-white"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

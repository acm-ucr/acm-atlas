import Link from "next/link";

const NotFound = () => {
  return (
<<<<<<< HEAD
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p className="text-acm-navy flex w-screen items-center justify-center text-4xl font-semibold">
        PAGE NOT FOUND
      </p>
      <Link
        className="bg-acm-blue-700 my-5 rounded-md px-7 py-2 font-semibold text-white"
        href="/"
      >
        Go Back Home
      </Link>
=======
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-acm-navy text-4xl font-semibold">PAGE NOT FOUND</p>
>>>>>>> f9ae7244cbaced02750bddbea5ea5a29c4f095cc
    </div>
  );
};

export default NotFound;

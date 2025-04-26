import Link from "next/link";

const HomeButton = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-15 pb-35">
      <Link
        href="/"
        className="bg-acm-blue-700 flex justify-center rounded-3xl px-18 py-6 text-3xl font-bold text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default HomeButton;

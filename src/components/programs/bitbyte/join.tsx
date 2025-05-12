import Link from "next/link";
const Join = () => {
  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2 pt-0 md:pt-20">
      <div className="flex flex-col">
        <p className="mt-16 flex justify-center text-3xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl">
          Join Now
        </p>
        <div className="flex justify-center py-4 md:py-0">
          <Link
            href="/"
            className="rounded-lg bg-acm-green-200 p-2 text-2xl text-white md:mt-0 md:px-10 md:py-4 md:text-4xl"
          >
            Apply Here!
          </Link>
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold text-center md:text-left">WHAT WE DO</p>
        <p className="pt-4 text-2xl text-center md:text-left">
          We connect multiple students with a mentor to be advised throughout
          one school year. During this period there will be different social and
          activities hosted to help foster a deeper relationship between the
          mentor and mentees.{" "}
        </p>
      </div>
    </div>
  );
};

export default Join;

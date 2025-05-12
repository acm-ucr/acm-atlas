import Link from "next/link";
const Join = () => {
  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
      <div className="flex flex-col">
        <p className="mt-10 flex justify-center pb-6 text-5xl font-semibold text-acm-gray-500 md:mt-0">
          Join Now
        </p>
        <div className="flex justify-center py-8 md:py-0">
          <Link
            href="/"
            className="rounded-lg bg-acm-green-200 px-10 py-4 text-4xl text-white"
          >
            Apply Here!
          </Link>
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold">WHAT WE DO</p>
        <p className="pt-4 text-2xl">
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

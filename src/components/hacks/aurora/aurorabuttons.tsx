import Link from "next/link";

const AuroraButtons = () => {
  return (
    <div className="mx-auto grid w-9/12 grid-cols-2 gap-y-20">
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="text-acm-gray-500 pb-5 text-center text-3xl font-semibold">
          WANT TO GET INVOLVED?
        </p>
        <Link
          href="https://discord.gg/5xzE2qTEKZ"
          target="_blank"
          className="bg-acm-green-400 flex justify-center rounded-xl px-30 py-7 text-2xl font-medium text-white"
        >
          Join our Discord!
        </Link>
      </div>
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="text-acm-gray-500 pb-5 text-center text-3xl font-semibold">
          CHECK OUT OUR BLOGS!
        </p>
        <Link
          href="https://medium.com/@contact.acmucr"
          target="_blank"
          className="bg-acm-green-400 flex justify-center rounded-xl px-30 py-7 text-2xl font-medium text-white"
        >
          Medium
        </Link>
      </div>
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="text-acm-gray-500 pb-5 text-center text-3xl font-semibold">
          CHECK OUT OUR CODE!
        </p>
        <Link
          href="https://github.com/acm-ucr/aurora"
          target="_blank"
          className="bg-acm-green-400 flex justify-center rounded-xl px-30 py-7 text-2xl font-medium text-white"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default AuroraButtons;

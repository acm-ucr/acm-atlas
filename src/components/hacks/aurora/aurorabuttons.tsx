import Link from "next/link";

const AuroraButtons = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-1 gap-y-20 md:grid-cols-2">
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="pb-5 text-center text-3xl font-semibold text-acm-gray-500">
          WANT TO GET INVOLVED?
        </p>
        <Link
          href="https://discord.gg/5xzE2qTEKZ"
          target="_blank"
          className="px-30 flex justify-center rounded-xl bg-acm-turquoise-200 py-7 text-2xl font-medium text-white"
        >
          Join our Discord!
        </Link>
      </div>
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="pb-5 text-center text-3xl font-semibold text-acm-gray-500">
          CHECK OUT OUR BLOGS!
        </p>
        <Link
          href="https://medium.com/@contact.acmucr"
          target="_blank"
          className="px-30 flex justify-center rounded-xl bg-acm-turquoise-200 py-7 text-2xl font-medium text-white"
        >
          Medium
        </Link>
      </div>
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="pb-5 text-center text-3xl font-semibold text-acm-gray-500">
          CHECK OUT OUR CODE!
        </p>
        <Link
          href="https://github.com/acm-ucr/aurora"
          target="_blank"
          className="px-30 flex justify-center rounded-xl bg-acm-turquoise-200 py-7 text-2xl font-medium text-white"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default AuroraButtons;

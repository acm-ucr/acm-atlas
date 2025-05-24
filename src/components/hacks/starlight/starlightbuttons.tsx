import Link from "next/link";

const Starlightbuttons = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <p className="pb-5 text-center text-2xl font-semibold text-acm-gray-500">
            WANT TO GET INVOLVED?
          </p>
          <Link
            href="https://discord.gg/5xzE2qTEKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-18 flex justify-center rounded-lg bg-acm-navy py-4 text-xl text-white"
          >
            Join our Discord!
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-5 text-center text-2xl font-semibold text-acm-gray-500">
            CHECK OUT OUR WORK!
          </p>
          <Link
            href="https://github.com/acm-ucr/starlight"
            target="_blank"
            rel="noopener noreferrer"
            className="px-18 flex justify-center rounded-lg bg-acm-navy py-4 text-xl text-white"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Starlightbuttons;

import Link from "next/link";

const Starlightbuttons = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <p className="text-acm-gray-500 pb-5 text-center text-2xl font-semibold">
            WANT TO GET INVOLVED?
          </p>
          <Link
            href="https://discord.gg/5xzE2qTEKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-navy flex justify-center rounded-lg px-18 py-4 text-xl text-white"
          >
            Join our Discord!
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-acm-gray-500 pb-5 text-center text-2xl font-semibold">
            CHECK OUT OUR WORK!
          </p>
          <Link
            href="https://github.com/acm-ucr/starlight"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-navy flex justify-center rounded-lg px-18 py-4 text-xl text-white"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Starlightbuttons;

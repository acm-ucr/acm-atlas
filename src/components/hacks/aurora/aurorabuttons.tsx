import Link from "next/link";

const Aurorabuttons = () => {
  return (
    <div className="flex justify-center pt-30 pb-20">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-30 gap-y-20">
        <div className="flex flex-col justify-center">
          <p className="text-acm-gray-500 pb-5 text-center text-4xl font-semibold">
            WANT TO GET INVOLVED?
          </p>
          <Link
            href="https://discord.gg/5xzE2qTEKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-green-300 flex justify-center rounded-xl px-30 py-7 text-3xl font-medium text-white"
          >
            Join our Discord!
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-acm-gray-500 pb-5 text-center text-4xl font-semibold">
            CHECK OUT OUR BLOGS!
          </p>
          <Link
            //found the link off google, not sure if it's the right one
            href="https://medium.com/@contact.acmucr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-green-300 flex justify-center rounded-xl px-30 py-7 text-3xl font-medium text-white"
          >
            Medium
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-acm-gray-500 pb-5 text-center text-4xl font-semibold">
            CHECK OUT OUR CODE!
          </p>
          <Link
            href="https://github.com/acm-ucr/aurora"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-green-300 flex justify-center rounded-xl px-30 py-7 text-3xl font-medium text-white"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aurorabuttons;

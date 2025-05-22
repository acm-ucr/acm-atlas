import Link from "next/link";

const SeeMore = () => {
  return (
    <div className="my-8 flex justify-center">
      <Link
        href="/events"
        className="rounded-2xl bg-acm-blue-700 px-12 py-3 text-3xl font-medium text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default SeeMore;

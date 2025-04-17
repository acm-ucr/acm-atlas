import Link from "next/link";

const SeeMoreLink = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="/events"
        className="bg-acm-blue-700 rounded-2xl px-12 py-3 text-3xl font-medium text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default SeeMoreLink;

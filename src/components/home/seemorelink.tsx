import Link from "next/link";

const SeeMoreLink = () => {
  return (
    <div className="flex justify-center py-8">
      <Link
        href="/events"
        className="rounded-2xl bg-acm-blue-700 px-12 py-3 text-3xl font-medium text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default SeeMoreLink;

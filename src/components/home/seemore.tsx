import Link from "next/link";

const SeeMoreLink = () => {
  return (
    <div className="fixed bottom-1/2 left-1/2 -translate-x-1/2">
      <Link
        href="/events"
        className="bg-acm-blue-700 flex w-3xs justify-center rounded-lg p-3 text-3xl font-medium text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default SeeMoreLink;

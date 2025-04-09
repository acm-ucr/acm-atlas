import Link from "next/link";

const SeeMoreButton = () => {
  return (
    <button className="bg-acm-blue-500 text-md hover:bg-acm-navy absolute bottom-10 h-10 w-40 rounded-lg">
      <Link href="/events">See More</Link>
    </button>
  );
};

export default SeeMoreButton;

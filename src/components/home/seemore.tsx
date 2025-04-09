import Link from "next/link";

const SeeMoreButton = () => {
  return (
    <button className="bg-acm-eslint text-md hover:bg-acm-typescript absolute bottom-10 h-10 w-40 rounded-lg text-white">
      <Link href="/events">See More</Link>
    </button>
  );
};

export default SeeMoreButton;

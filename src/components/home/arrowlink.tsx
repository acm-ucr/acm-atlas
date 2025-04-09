import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ArrowLinkProps {
  link: string;
  children: React.ReactNode;
}

const ArrowLink = ({ link, children }: ArrowLinkProps) => {
  return (
    <Link
      href={link}
      className="text-acm-gray-500 flex items-center text-lg font-semibold"
    >
      View all {children} Projects <FaArrowRightLong className="ml-2" />
    </Link>
  );
};
export default ArrowLink;

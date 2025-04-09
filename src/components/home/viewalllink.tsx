import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ViewAllLinkProps {
  link: string;
  children: React.ReactNode;
}

const ViewAllLink = ({ link, children }: ViewAllLinkProps) => {
  return (
    <Link
      href={link}
      className="text-acm-gray-500 flex items-center text-lg font-semibold"
    >
      View all {children} Projects <FaArrowRightLong className="ml-2" />
    </Link>
  );
};
export default ViewAllLink;

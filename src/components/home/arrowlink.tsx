import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface linkArrowProps {
  link: string;
}

const LinkArrowSpark = (props: linkArrowProps) => {
  const link = props.link;
  return (
    <Link
      href={link}
      className="text-acm-gray-500 flex items-center text-lg font-semibold"
    >
      View all Spark Projects <FaArrowRightLong className="m1-2" />
    </Link>
  );
};

export default LinkArrowSpark;

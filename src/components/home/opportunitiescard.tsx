import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  cardBackground: string;
  appYearAndQuarter: string;
  link: string;
  applicationLink: string;
  index: number;
}

const OpportunitiesCard = ({
  name,
  cardBackground,
  appYearAndQuarter,
  link,
  applicationLink,
  index,
}: CardProps) => {
  return (
    <div className="relative mt-10">
      <Image
        src={cardBackground}
        alt="Card background"
      />
      <p className="text-acm-gray-500 absolute top-6 left-6 text-xl">
        0{index}
      </p>
      <div className="absolute bottom-22 left-8 flex items-center gap-2">
        <p className="text-acm-gray-500 text-xl font-semibold uppercase">
          {name}
        </p>
        <Link
          href={link}
          className="flex px-4 py-1 justify-center rounded-full bg-white text-sm"
        >
          Learn more →
        </Link>
      </div>
      <Link
        href={applicationLink}
        className="text-acm-gray-500 absolute bottom-5 left-3 flex h-10 w-80 items-center justify-center rounded-full bg-white text-xl font-bold"
      >
        {appYearAndQuarter} APPLICATION
      </Link>
    </div>
  );
};

export default OpportunitiesCard;

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  cardBackground: string;
  index: number;
}

const CurrentOpportunitiesCard = ({
  name,
  cardBackground,
  index,
}: CardProps) => {
  return (
    <div className="relative mt-10">
      <Image
        src={cardBackground}
        alt="Card background"
        width={500}
        height={500}
        className="w-85"
      />
      <p className="text-acm-gray-500 absolute top-6 left-6 text-xl">
        0{index}
      </p>
      <div className="absolute bottom-22 left-8 flex items-center gap-2">
        <p className="text-acm-gray-500 text-xl font-semibold uppercase">
          {name}
        </p>
        <Link
          href={`/programs/${name}`}
          className="flex h-6 w-30 justify-center rounded-full bg-white text-sm"
        >
          Learn more →
        </Link>
      </div>
      {/* update link */}
      <Link
        href="/"
        className="text-acm-gray-500 absolute bottom-5 left-3 flex h-10 w-80 items-center justify-center rounded-full bg-white text-xl font-bold"
      >
        SPRING '24 APPLICATION
      </Link>
    </div>
  );
};

export default CurrentOpportunitiesCard;

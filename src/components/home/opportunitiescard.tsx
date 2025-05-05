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
      <Image src={cardBackground} alt="Card background" />
      <p className="text-acm-gray-500 absolute top-6 left-6 text-xl">
        0{index}
      </p>
<<<<<<< HEAD
      <div className="absolute bottom-22 left-8 flex items-center gap-2">
        <p className="text-acm-gray-500 text-xl font-semibold uppercase">
=======
      <div className="absolute bottom-[5.5rem] left-8 flex items-center gap-2">
        <p className="text-xl font-semibold uppercase text-acm-gray-500">
>>>>>>> 8f1c77bb21336eb547e2667113a6b1780ca68246
          {name}
        </p>
        <Link href={link} className="rounded-full bg-white px-4 py-1 text-sm">
          Learn more →
        </Link>
      </div>
      <Link
        href={applicationLink}
        className="text-acm-gray-500 absolute bottom-5 left-3 rounded-full bg-white px-9 py-2 text-xl font-bold"
      >
        {appYearAndQuarter} APPLICATION
      </Link>
    </div>
  );
};

export default OpportunitiesCard;

import { TECHSTACKS, TECH_COLORS } from "@/data/hackpacks";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface HackpackCardProps {
  title: string;
  description: string;
  link: string;
  languages: string[];
}

const HackpackCard = ({
  title,
  description,
  link,
  languages,
}: HackpackCardProps) => (
  <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
    <div className="flex items-center justify-between">
      <p className="text-lg font-bold text-acm-gray-500">{title}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-acm-github" />
      </Link>
    </div>
    <p className="text-sm text-acm-gray-500">{description}</p>
    <div>
      <p className="mb-2 font-semibold text-gray-500">TECH STACK</p>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${TECH_COLORS[lang] || "bg-gray-200 text-gray-800"}`}
          >
            {TECHSTACKS[lang]}
            <span>{lang}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default HackpackCard;

import { TECHSTACKS, TECH_COLORS, HACKPACKS } from "@/data/user/hackpacks";
import { FaGithub } from "react-icons/fa";

interface HackpackCardProps {
  title: string;
  description: string;
  link: string;
  languages: string[];
}

const HackpackCard = ({ title, description, link, languages }: HackpackCardProps) => (
  <div className="rounded-2xl shadow-md p-6 bg-white flex flex-col gap-4 w-full max-w-xs">
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-lg text-gray-700">{title.toUpperCase()}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-blue-500" />
      </a>
    </div>
    <p className="text-gray-900 text-sm">{description}</p>
    <div>
      <p className="font-semibold text-gray-700 mb-2">TECH STACK</p>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${TECH_COLORS[lang] || "bg-gray-200 text-gray-800"}`}
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
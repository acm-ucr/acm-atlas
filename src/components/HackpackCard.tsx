import { TECHSTACKS, TECH_COLORS} from "@/data/user/hackpacks";
import { FaGithub } from "react-icons/fa";

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
  <div className="flex w-full max-w-xs flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-bold text-gray-700">{title.toUpperCase()}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-blue-500" />
      </a>
    </div>
    <p className="text-sm text-gray-900">{description}</p>
    <div>
      <p className="mb-2 font-semibold text-gray-700">TECH STACK</p>
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

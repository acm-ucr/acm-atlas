import rosehackLogo from "@/public/logos/rosehack.svg";
import cutiehackLogo from "@/public/logos/cutiehack.svg";
import citrushackLogo from "@/public/logos/citrushack.svg";
import designverseLogo from "@/public/logos/designverse.svg";
import { StaticImageData } from "next/image";

interface Hackathon {
  logo: StaticImageData;
  name: string;
  description: string;
  website: string;
  textColor: string;
  devposts: string[];
  contacts: {
    email?: string;
    instagram?: string;
    linkedin?: string;
    discord?: string;
  };
}

const hacks: Hackathon[] = [
  {
    logo: rosehackLogo,
    name: "Rose Hack",
    description:
      "Rose Hack is UC Riverside's 24-hour hackathon, one of the few women-centric hackathons in California!",
    website: "https://www.rosehack.com/",
    textColor: "text-[#1F3F3D]",
    devposts: [
      "https://rosehack2023.devpost.com/",
      "https://rosehack2024.devpost.com/",
      "https://rosehack2025.devpost.com/",
    ],
    contacts: {
      email: "rosehackucr@gmail.com",
      instagram: "https://www.instagram.com/rosehackucr/",
      linkedin: "https://www.linkedin.com/company/33212536",
      discord: undefined,
    },
  },
  {
    logo: cutiehackLogo,
    name: "Cutie Hack",
    description:
      "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside.",
    website: "https://cutiehack.com/",
    textColor: "text-[#FFAC01]",
    devposts: [
      "https://cutiehack2020.devpost.com/",
      "https://cutiehack2021.devpost.com/",
      "https://cutiehack2023.devpost.com/",
    ],
    contacts: {
      email: "citrushack@gmail.com",
      instagram: "https://www.instagram.com/cutiehack_ucr/",
      linkedin: "https://www.linkedin.com/company/cutie-hack/",
      discord: undefined,
    },
  },
  {
    logo: citrushackLogo,
    name: "Citrus Hack",
    description:
      "Citrus Hack is a 24-hour hackathon and one of UC Riverside's largest hackathons.",
    website: "https://www.citrushack.com/",
    textColor: "text-[#FFAC01]",
    devposts: [
      "https://citrus-hack-2022.devpost.com/project-gallery",
      "https://citrus-hack-2023.devpost.com/project-gallery",
      "https://citrus-hack-2025.devpost.com/project-gallery",
    ],
    contacts: {
      email: "citrushack@gmail.com",
      instagram: "https://www.instagram.com/citrushack_ucr/",
      linkedin: "https://www.linkedin.com/in/citrushack/",
      discord: undefined,
    },
  },
  {
    logo: designverseLogo,
    name: "Designverse",
    description:
      "DesignVerse is the first and only 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside.",
    website: "https://www.designverseucr.org/",
    textColor: "text-[#1F3F3D]",
    devposts: ["https://designverseucr.devpost.com/"],
    contacts: {
      email: "designverseucr@gmail.com",
      instagram: "https://www.instagram.com/designverseucr/",
      linkedin: "https://www.linkedin.com/company/designverseucr",
      discord: undefined,
    },
  },
];

export default hacks;

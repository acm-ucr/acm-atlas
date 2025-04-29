import Rosehack from "@/public/logos/rosehack.svg";
import Cutiehack from "@/public/logos/cutiehack.svg";
import Citrushack from "@/public/logos/citrushack.svg";
import Designverse from "@/public/logos/designverse.svg";
import { StaticImageData } from "next/image";

interface Hackathon {
  id: string;
  logo: StaticImageData;
  name: string;
  description: string;
  website: string;
  textColor: string;
  devposts: {
    year: string;
    link: string;
  }[];
}

const hackathons: Hackathon[] = [
  {
    id: "rosehack",
    logo: Rosehack,
    name: "Rose Hack",
    description:
      "Rose Hack is UC Riverside's 24-hour hackathon, one of the few women-centric hackathons in California!",
    website: "https://www.rosehack.com/",
    textColor: "text-acm-green-500",
    devposts: [
      { year: "2020", link: "https://rose-hack-2020.devpost.com/" },
      { year: "2021", link: "https://rose-hack-2021.devpost.com/" },
      { year: "2022", link: "https://rose-hack-2022.devpost.com/" },
      { year: "2023", link: "https://rosehack2023.devpost.com/" },
      { year: "2024", link: "https://rosehack2024.devpost.com/" },
      { year: "2025", link: "https://rosehack2025.devpost.com/" },
    ],
  },
  {
    id: "cutiehack",
    logo: Cutiehack,
    name: "Cutie Hack",
    description:
      "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside.",
    website: "https://cutiehack.com/",
    textColor: "text-acm-orange-400",
    devposts: [
      { year: "2019", link: "https://cutiehack2019.devpost.com/" },
      { year: "2020", link: "https://cutiehack2020.devpost.com/" },
      { year: "2021", link: "https://cutiehack2021.devpost.com/" },
      { year: "2022", link: "https://cutie-hack-2022.devpost.com/" },
      { year: "2023", link: "https://cutiehack2023.devpost.com/" },
      { year: "2024", link: "https://cutie-hack-2024-23083.devpost.com/" },
    ],
  },
  {
    id: "citrushack",
    logo: Citrushack,
    name: "Citrus Hack",
    description:
      "Citrus Hack is a 24-hour hackathon and one of UC Riverside's largest hackathons.",
    website: "https://www.citrushack.com/",
    textColor: "text-acm-orange-400",
    devposts: [
      { year: "2019", link: "https://citrushack2019.devpost.com/" },
      { year: "2020", link: "https://citrushack2020.devpost.com/" },
      { year: "2021", link: "https://citrushack2021.devpost.com/" },
      {
        year: "2022",
        link: "https://citrus-hack-2022.devpost.com/project-gallery",
      },
      {
        year: "2023",
        link: "https://citrus-hack-2023.devpost.com/project-gallery",
      },
      {
        year: "2024",
        link: "https://citrus-hack-2025.devpost.com/project-gallery",
      },
    ],
  },
  {
    id: "designverse",
    logo: Designverse,
    name: "Designverse",
    description:
      "DesignVerse is the first and only 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside.",
    website: "https://www.designverseucr.org/",
    textColor: "text-text-acm-green-500",
    devposts: [{ year: "2024", link: "https://designverseucr.devpost.com/" }],
  },
];

export default hackathons;
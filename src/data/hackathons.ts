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
  description2: string;
  website: string;
  textColor: string;
  bgColor: string;
  subtitle: string;
  devposts: {
    year: string;
    link: string;
  }[];
  stats: {
    end: number;
    label: string;
  }[];
  instagram: string;
  email: string;
}

const hackathons: Hackathon[] = [
  {
    id: "rosehack",
    logo: Rosehack,
    name: "ROSEHACK",
    description:
      "Rose Hack is UC Riverside's 24-hour hackathon, one of the few women-centric hackathons in California!",
    description2:
      "Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to gain experience, create strong networks, and build amazing projects through their shared passions in Science and Technology.",
    website: "https://www.rosehack.com/",
    textColor: "text-acm-green-400",
    bgColor: "bg-acm-green-400",
    subtitle: "Hackathon",
    devposts: [
      { year: "2020", link: "https://rose-hack-2020.devpost.com/" },
      { year: "2021", link: "https://rose-hack-2021.devpost.com/" },
      { year: "2022", link: "https://rose-hack-2022.devpost.com/" },
      { year: "2023", link: "https://rosehack2023.devpost.com/" },
      { year: "2024", link: "https://rosehack2024.devpost.com/" },
      { year: "2025", link: "https://rosehack2025.devpost.com/" },
    ],
    stats: [
      { end: 500, label: "Hackers" },
      { end: 2500, label: "Projects" },
      { end: 1000, label: "In Prizes" },
      { end: 24, label: "Hours" },
    ],
    instagram: "https://www.instagram.com/rosehackucr/",
    email: "rosehackucr@gmail.com",
  },
  {
    id: "cutiehack",
    logo: Cutiehack,
    name: "CUTIE HACK",
    description:
      "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside.",
    description2:
      "Lorem ipsum dolor sit amet, quo ei error utroque. Nam verear minimum deseruisse an, ludus tollit nec.",
    website: "https://cutiehack.com/",
    textColor: "text-acm-orange-400",
    bgColor: "bg-acm-orange-400",
    subtitle: "Hackathon",
    devposts: [
      { year: "2019", link: "https://cutiehack2019.devpost.com/" },
      { year: "2020", link: "https://cutiehack2020.devpost.com/" },
      { year: "2021", link: "https://cutiehack2021.devpost.com/" },
      { year: "2022", link: "https://cutie-hack-2022.devpost.com/" },
      { year: "2023", link: "https://cutiehack2023.devpost.com/" },
      { year: "2024", link: "https://cutie-hack-2024-23083.devpost.com/" },
    ],
    stats: [
      { end: 500, label: "Hackers" },
      { end: 2500, label: "Projects" },
      { end: 1000, label: "In Prizes" },
      { end: 24, label: "Hours" },
    ],
    instagram: "https://www.instagram.com/cutiehack_ucr/",
    email: "citrushack@gmail.com",
  },
  {
    id: "citrushack",
    logo: Citrushack,
    name: "CITRUS HACK",
    description:
      "Citrus Hack is a 24-hour hackathon and one of UC Riverside's largest hackathons.",
    description2:
      "Lorem ipsum dolor sit amet, quo ei error utroque. Nam verear minimum deseruisse an, ludus tollit nec.",
    website: "https://www.citrushack.com/",
    textColor: "text-acm-orange-400",
    bgColor: "bg-acm-orange-400",
    subtitle: "Hackathon",
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
    stats: [
      { end: 500, label: "Hackers" },
      { end: 2500, label: "Projects" },
      { end: 1000, label: "In Prizes" },
      { end: 24, label: "Hours" },
    ],
    instagram: "https://www.instagram.com/citrushack_ucr/",
    email: "citrushack@gmail.com",
  },
  {
    id: "designverse",
    logo: Designverse,
    name: "DESIGNVERSE",
    description:
      "DesignVerse is the first and only 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside.",
    description2:
      "Lorem ipsum dolor sit amet, quo ei error utroque. Nam verear minimum deseruisse an, ludus tollit nec.",
    website: "https://www.designverseucr.org/",
    textColor: "text-acm-green-400",
    bgColor: "bg-acm-green-400",
    subtitle: "Designathon",
    devposts: [{ year: "2024", link: "https://designverseucr.devpost.com/" }],
    stats: [
      { end: 500, label: "Hackers" },
      { end: 2500, label: "Projects" },
      { end: 1000, label: "In Prizes" },
      { end: 24, label: "Hours" },
    ],
    instagram: "https://www.instagram.com/designverseucr/",
    email: "designverseucr@gmail.com",
  },
];

export default hackathons;

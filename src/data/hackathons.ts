import Rosehack from "@/public/logos/rosehack.svg";
import Cutiehack from "@/public/logos/cutiehack.svg";
import Citrushack from "@/public/logos/citrushack.svg";
import Designverse from "@/public/logos/designverse.svg";
import designverseImages from "@/data/hackphotos/designversephotos";
import citrushackImages from "@/data/hackphotos/citrushackphotos";
import roseHackImages from "@/data/hackphotos/rosehackphotos";
import { StaticImageData } from "next/image";

interface Hackathon {
  id: string;
  logo: StaticImageData;
  name: string;
  years: string;
  description: string;
  description2: string;
  website: string;
  textColor: string;
  bgColor: string;
  subtitle: string;
  carouselItems: {
    image: StaticImageData;
    alt: string;
  }[];
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

export const cutiehack: Hackathon = {
  id: "cutiehack",
  logo: Cutiehack,
  name: "CUTIE HACK",
  years: "2023, 2024, 2025",
  description:
    "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside.",
  description2:
    "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside where hackers are challenged to create a cool project within the time frame to demo in order to win awesome prizes and participate in workshops, fun games, and networking.",
  website: "https://cutiehack.com/",
  textColor: "text-acm-orange-400",
  bgColor: "bg-acm-orange-400",
  subtitle: "Hackathon",
  carouselItems: citrushackImages,
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
};

export const citrushack: Hackathon = {
  id: "citrushack",
  logo: Citrushack,
  name: "CITRUS HACK",
  years: "2025",
  description:
    "Citrus Hack is a 24-hour hackathon and one of UC Riverside's largest hackathons.",
  description2:
    "Citrus Hack is a 24 hour hackathon and one of UC Riverside's largest hackathons. Hackers get the opportunity to build a project to present to a panel of judges for prizes. Participants get the chance to attend workshops, network, and play games!",
  website: "https://www.citrushack.com/",
  textColor: "text-acm-orange-400",
  bgColor: "bg-acm-orange-400",
  subtitle: "Hackathon",
  carouselItems: citrushackImages,
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
      year: "2025",
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
};

export const rosehack: Hackathon = {
  id: "rosehack",
  logo: Rosehack,
  name: "ROSEHACK",
  years: "2024, 2025",
  description:
    "Rose Hack is UC Riverside's 24-hour hackathon, one of the few women-centric hackathons in California!",
  description2:
    "Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to gain experience, create strong networks, and build amazing projects through their shared passions in Science and Technology.",
  website: "https://www.rosehack.com/",
  textColor: "text-acm-green-400",
  bgColor: "bg-acm-green-400",
  subtitle: "Hackathon",
  carouselItems: roseHackImages,
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
};

export const designverse: Hackathon = {
  id: "designverse",
  logo: Designverse,
  name: "DESIGNVERSE",
  years: "2024, 2025",
  description:
    "DesignVerse is the first and only 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside.",
  description2:
    "DesignVerse is the first and only 24-hour beginner-friendly Design-a-Thon hosted by the University of California, Riverside. Designers are challenged to create the interface of an app or website through a given prompt, which would then be demoed and presented to a panel of industry professionals. At DesignVerse, our goal is to empower our community of students who are interested in design-like thinking and provide career developmental opportunities through our workshops, mentorship, and networking events. We welcome all undergraduate, graduate and high school students for a lively weekend filled with creativity, networking, mentorship, and more!",
  website: "https://www.designverseucr.org/",
  textColor: "text-[#203649]",
  bgColor: "bg-[#203649]",
  subtitle: "Designathon",
  carouselItems: designverseImages,
  devposts: [
    { year: "2024", link: "https://designverseucr.devpost.com/" },
    { year: "2025", link: "https://designverse2025.devpost.com/" },
  ],
  stats: [
    { end: 500, label: "Hackers" },
    { end: 2500, label: "Projects" },
    { end: 1000, label: "In Prizes" },
    { end: 24, label: "Hours" },
  ],
  instagram: "https://www.instagram.com/designverseucr/",
  email: "designverseucr@gmail.com",
};

export const hackathons = [cutiehack, citrushack, rosehack, designverse];

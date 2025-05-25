import { GoTriangleDown } from "react-icons/go";

const navigations = [
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "BOARD",
    link: "/board",
  },
  {
    name: "PROGRAMS ",
    icon: GoTriangleDown,
    link: "/programs",
    subItems: [
      {
        subName: "SPARK",
        subLink: "/programs/sparksss",
      },
      {
        subName: "FORGE",
        subLink: "/programs/forge",
      },
      {
        subName: "CREATE",
        subLink: "/programs/create",
      },
      {
        subName: "DAS",
        subLink: "/programs/das",
      },
      {
        subName: "BIT/BYTE",
        subLink: "/programs/bitbyte",
      },
    ],
  },
  {
    name: "HACKS",
    link: "/hacks",
  },
  {
    name: "EVENTS",
    link: "/events",
  },
  {
    name: "JOIN US",
    link: "/join",
  },
];

export default navigations;

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
    name: "PROGRAMS",
    link: "/programs",
    subItems: [
      {
        subName: "SPARK",
        subLink: "/programs/spark",
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
        subName: "Bit/Byte",
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

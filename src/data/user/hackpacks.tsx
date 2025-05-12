import {
  SiTypescript as Typescript,
  SiArduino as Arduino,
  SiNextdotjs as Nextjs,
  SiTailwindcss as Tailwind,
  SiFirebase as Firebase,
  SiCplusplus as CPlusPlus,
  SiMongodb as Mongodb,
  SiPython as Python,
  SiUnity as Unity,
  SiGithubactions as GithubActions,
  SiEslint as Eslint,
  SiPrettier as Prettier,
  SiDiscord as Discord,
  SiJupyter as Jupyter,
  SiPandas as Pandas,
} from "react-icons/si";

export const TECH_COLORS: Record<string, string> = {
  typescript: "bg-acm-typescript text-white",
  "next.js": "bg-black text-white",
  firebase: "bg-acm-red text-white",
  tailwind: "bg-acm-tailwindcss text-white",
  mongodb: "bg-green-100 text-white",
  arduino: "bg-acm-arduino text-white",
  python: "bg-acm-python text-white",
  unity: "bg-gray-300 text-white",
  "c++": "bg-blue-300 text-white",
  "github actions": "bg-gray-100 text-white",
  eslint: "bg-acm-eslint text-white",
  prettier: "bg-acm-prettier text-white",
  discord: "bg-indigo-100 text-white",
  jupyter: "bg-orange-200 text-white",
  pandas: "bg-gray-200 text-white",
};

export const TECHSTACKS: Record<string, React.ReactNode> = {
  typescript: <Typescript className="w-4" />,
  "next.js": <Nextjs className="w-4" />,
  firebase: <Firebase className="w-4" />,
  tailwind: <Tailwind className="w-4" />,
  mongodb: <Mongodb className="w-4" />,
  arduino: <Arduino className="w-4" />,
  python: <Python className="w-4" />,
  unity: <Unity className="w-4" />,
  "c++": <CPlusPlus className="w-4" />,
  "github actions": <GithubActions className="w-4" />,
  eslint: <Eslint className="w-4" />,
  prettier: <Prettier className="w-4" />,
  discord: <Discord className="w-4" />,
  jupyter: <Jupyter className="w-4" />,
  pandas: <Pandas className="w-4" />,
};
export const HACKPACKS = [
  {
    link: "https://github.com/acm-ucr/firebase-nextjs-hackpack",
    title: "FIREBASE WEB APP",
    languages: [
      "typescript",
      "next.js",
      "firebase",
      "tailwind",
      "prettier",
      "eslint",
      "github actions",
    ],
    description:
      "A full-stack starter using Firebase and Next.js. Ideal for apps with real-time database needs, featuring Tailwind CSS and GitHub Actions.",
  },
  {
    link: "https://github.com/acm-ucr/firebase-nextjs-hackpack",
    title: "MONGODB WEB APP",
    languages: [
      "typescript",
      "next.js",
      "mongodb",
      "tailwind",
      "prettier",
      "eslint",
      "github actions",
    ],
    description:
      "A Next.js + MongoDB pack for scalable, document-based apps. Great for flexible data management with Tailwind styling.",
  },
  {
    link: "https://github.com/acm-ucr/nextjs-hackpack",
    title: "FULL STACK WEB APP",
    languages: [
      "typescript",
      "next.js",
      "tailwind",
      "prettier",
      "eslint",
      "github actions",
    ],
    description:
      "Next.js starter for single-page apps with Tailwind CSS. Fast setup with built-in GitHub Actions for CI/CD.",
  },
  {
    link: "https://github.com/acm-ucr/arduino-hackpack",
    title: "HARDWARE",
    languages: ["arduino", "c++"],
    description:
      "A starter for Arduino projects. Perfect for IoT, robotics, and hands-on hardware experiments with C++.",
  },
  {
    link: "https://github.com/acm-ucr/unity-hackpack",
    title: "GAME DEVELOPMENT",
    languages: ["unity"],
    description:
      "Unity starter pack for 2D and 3D games. Includes foundational scripts for quick game prototyping.",
  },
  {
    link: "https://github.com/acm-ucr/discord-javascript-hackpack",
    title: "JAVASCRIPT DISCORD BOT",
    languages: [
      "typescript",
      "discord",
      "prettier",
      "eslint",
      "github actions",
    ],
    description:
      "JavaScript starter for Discord bots, with templates for commands and events. Great for chat automation and community tools.",
  },
  {
    link: "https://github.com/acm-ucr/discord-python-hackpack",
    title: "PYTHON DISCORD BOT",
    languages: ["python"],
    description:
      "Python-based starter for Discord bots. Ideal for chat management and interactive bot functionalities.",
  },
  {
    link: "https://github.com/acm-ucr/discord-python-hackpack",
    title: "COMPUTER VISION",
    languages: ["python"],
    description:
      "Python starter pack for computer vision. Suitable for image processing and object detection projects.",
  },
  {
    link: "https://github.com/acm-ucr/python-hackpack",
    title: "PYTHON",
    languages: ["python"],
    description:
      "A general-purpose Python starter, useful for scripting, automation, and data analysis projects.",
  },
  {
    link: "https://github.com/acm-ucr/python-hackpack",
    title: "MACHINE LEARNING",
    languages: ["python", "jupyter", "pandas"],
    description:
      "Python + Jupyter starter for machine learning. Perfect for data analysis and predictive modeling with Pandas.",
  },
];

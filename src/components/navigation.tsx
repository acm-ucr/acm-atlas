"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  RiMenu2Fill,
  RiCloseFill,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import navigations from "@/data/navigations";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const [navBar, setNav] = useState(false);
  const [programBar, setProgramBar] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const handleNavBar = () => {
    setNav(!navBar);
  };

  const handleProgramBar = () => {
    setProgramBar(!programBar);
  };

  const handleBothBars = () => {
    setProgramBar(!programBar);
    setNav(!navBar);
  };

  return (
    <div className="border-b-3 grid grid-cols-4 border-acm-blue-400 p-5 shadow-xl md:grid-cols-5">
      <RiMenu2Fill
        className="block text-3xl text-acm-gray-500 md:hidden"
        onClick={programBar ? handleBothBars : handleNavBar}
      />
      <Link className={pathname === "" ? "text-acm-blue-500" : ""} href="/">
        <motion.div
          className={
            pathname === "/"
              ? "text-3xl font-semibold text-acm-blue-500 text-acm-gray-500"
              : "text-3xl font-semibold text-acm-gray-500"
          }
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ACM@UCR
        </motion.div>{" "}
      </Link>

      {/* For web view */}
      <div className="col-span-4 hidden justify-end space-x-5 pr-5 md:flex">
        {navigations.map(({ name, icon: Icon, link, subItems }, index) => (
          <NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {subItems ? (
                  <>
                    <NavigationMenuTrigger onClick={() => router.push(link)}>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {name}
                        {Icon && <Icon className="text-lg" />}
                      </motion.div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white px-7">
                      {subItems.map(({ subName, subLink }, subIndex) => (
                        <NavigationMenuLink
                          key={subIndex}
                          className={
                            pathname === link
                              ? "font-semibold text-acm-blue-500"
                              : ""
                          }
                          href={subLink}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {subName}
                          </motion.div>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    className={pathname === link ? "text-acm-blue-500" : ""}
                    href={link}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {name}
                    </motion.div>
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </div>

      {/* For mobile view */}
      {navBar && (
        <div className="fixed inset-0 z-20 flex md:hidden">
          <div className="flex h-full w-[90vw] flex-col gap-5 bg-white pb-5 md:hidden">
            <div className="flex items-end justify-end pr-2 pt-4">
              <RiCloseFill
                className="text-3xl text-acm-gray-400"
                onClick={handleNavBar}
              />
            </div>
            <div className="relative ml-5 flex flex-col items-start justify-start">
              {navigations.map(({ name, link, subItems }, index) => (
                <div
                  className="flex w-full justify-between border-t-2 border-acm-gray-100 py-2"
                  key={index}
                >
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        {subItems ? (
                          <>
                            <div className="flex flex-col">
                              <Link
                                href={link}
                                className={
                                  pathname === link
                                    ? "text-base font-light"
                                    : ""
                                }
                                onClick={handleNavBar}
                              >
                                {name}
                              </Link>
                              <div
                                className={`${programBar ? "flex flex-col gap-2 pt-3 capitalize" : "hidden"}`}
                              >
                                {subItems.map(
                                  ({ subName, subLink }, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subLink}
                                      className={
                                        pathname === subLink
                                          ? "py-1 text-sm font-light capitalize"
                                          : ""
                                      }
                                      onClick={handleBothBars}
                                    >
                                      {subName.toLowerCase()}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          <Link
                            href={link}
                            className={
                              pathname === link ? "text-base font-light" : ""
                            }
                            onClick={handleNavBar}
                          >
                            {name}
                          </Link>
                        )}
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  {subItems && (
                    <div className="w-1/8 absolute right-3 flex items-center justify-center border-l-2 pl-4 text-acm-gray-100">
                      {programBar ? (
                        <RiArrowUpSLine
                          className="text-2xl text-acm-gray-400"
                          onClick={handleProgramBar}
                        />
                      ) : (
                        <RiArrowDownSLine
                          className="text-2xl text-acm-gray-400"
                          onClick={handleProgramBar}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="h-full w-[10vw] bg-white opacity-45"
            onClick={handleNavBar}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;

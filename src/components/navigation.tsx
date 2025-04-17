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

const Navigation = () => {
  const [navBar, setNav] = useState(false);
  const [programBar, setProgramBar] = useState(false);
  const router = useRouter();

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
    <div className="border-acm-blue-400 grid grid-cols-4 border-b-3 p-5 shadow-xl md:grid-cols-5">
      <RiMenu2Fill
        className="text-acm-gray-500 block text-3xl md:hidden"
        onClick={programBar ? handleBothBars : handleNavBar}
      />
      <Link
        className="text-acm-gray-500 pl-4 text-3xl font-bold md:pl-0"
        href="/"
      >
        ACM@UCR
      </Link>

      {/* For web view */}
      <div className="col-span-4 hidden justify-end space-x-5 pr-5 md:flex">
        {navigations.map(({ name, link, subItems }, index) => (
          <NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {subItems ? (
                  <>
                    <NavigationMenuTrigger onClick={() => router.push(link)}>
                      {name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {subItems.map(({ subName, subLink }, subIndex) => (
                        <NavigationMenuLink key={subIndex} href={subLink}>
                          {subName}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link}>{name}</Link>
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
            <div className="flex items-end justify-end pt-4 pr-2">
              <RiCloseFill
                className="text-acm-gray-400 text-3xl"
                onClick={handleNavBar}
              />
            </div>
            <div className="ml-5 flex flex-col items-start justify-start">
              {navigations.map(({ name, link, subItems }, index) => (
                <div
                  className="border-acm-gray-100 flex w-full justify-between border-t-1 py-2"
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
                                className="text-base font-light"
                                onClick={handleNavBar}
                              >
                                {name}
                              </Link>
                              <div
                                className={`${programBar ? "flex flex-col pt-3" : "hidden"}`}
                              >
                                {subItems.map(
                                  ({ subName, subLink }, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subLink}
                                      className="py-1 text-sm font-light capitalize"
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
                            className="text-base font-light"
                            onClick={handleNavBar}
                          >
                            {name}
                          </Link>
                        )}
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  {subItems && (
                    <div className="text-acm-gray-100 absolute right-16 flex w-1/8 items-center justify-center border-l-1">
                      {programBar ? (
                        <RiArrowUpSLine
                          className="text-acm-gray-400 text-2xl"
                          onClick={handleProgramBar}
                        />
                      ) : (
                        <RiArrowDownSLine
                          className="text-acm-gray-400 text-2xl"
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

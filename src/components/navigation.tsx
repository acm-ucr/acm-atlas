"use client";
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
import { AnimatePresence, motion } from "motion/react";

const mainMobNavBarAnim = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.3,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 0.3,
    },
  },
};

const subMobNavBarAnim = (index: number) => ({
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    delay: (index + 1) * 0.05 + 0.55,
    duration: 0.3,
    ease: "easeIn",
  },
});

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

  const NavbarAnimation = {
    whileHover: { scale: 1.02 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-4 border-acm-blue-400 bg-white p-5 shadow-xl md:grid-cols-5 md:border-b-2 md:border-b-acm-blue-600">
      <RiMenu2Fill
        className="block text-3xl text-acm-gray-500 md:hidden"
        onClick={programBar ? handleBothBars : handleNavBar}
      />
      <Link className={pathname === "/" ? "text-acm-blue-500" : ""} href="/">
        <motion.div
          className="text-3xl font-semibold text-acm-gray-500"
          {...NavbarAnimation}
        >
          ACM@UCR
        </motion.div>
      </Link>

      {/* For web view */}
      <div className="col-span-4 hidden justify-end space-x-5 pr-5 md:flex">
        {navigations.map(({ name, icon: Icon, link, subItems }, index) => (
          <NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {subItems ? (
                  <>
                    <NavigationMenuTrigger
                      onClick={() => router.push(link)}
                      className={
                        pathname.startsWith(link) ? "text-acm-blue-500" : ""
                      }
                    >
                      <motion.div
                        className="flex items-center gap-1"
                        {...NavbarAnimation}
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
                            pathname === subLink
                              ? "font-semibold text-acm-blue-500"
                              : ""
                          }
                          href={subLink}
                        >
                          <motion.div {...NavbarAnimation}>
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
                    <motion.div {...NavbarAnimation}>{name}</motion.div>
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </div>

      {/* For mobile view */}
      <AnimatePresence>
        {navBar && (
          <motion.div
            className="fixed inset-0 z-20 flex md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mainMobNavBarAnim}
          >
            <div className="flex h-full w-[90vw] flex-col gap-5 bg-white pb-5 md:hidden">
              <div className="flex items-end justify-end pr-2 pt-4">
                <RiCloseFill
                  className="text-3xl text-acm-gray-400"
                  onClick={handleNavBar}
                />
              </div>
              <div className="relative ml-5 flex flex-col items-start justify-start">
                {navigations.map(({ name, link, subItems }, index) => (
                  <motion.div
                    initial={subMobNavBarAnim(index).initial}
                    animate={subMobNavBarAnim(index).animate}
                    transition={subMobNavBarAnim(index).transition}
                    className="flex w-full justify-between border-t-2 border-acm-gray-100 py-2"
                    key={index}
                  >
                    <div>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            {subItems ? (
                              <>
                                <div className="flex flex-col">
                                  <Link
                                    href={link}
                                    className={
                                      pathname.startsWith(link)
                                        ? "text-base font-semibold text-acm-blue-500"
                                        : "text-base font-light"
                                    }
                                    onClick={handleNavBar}
                                  >
                                    {name}
                                  </Link>
                                  {programBar && (
                                    <div className="flex flex-col gap-2 pt-3 capitalize">
                                      {subItems.map(
                                        ({ subName, subLink }, subIndex) => (
                                          <Link
                                            key={subIndex}
                                            href={subLink}
                                            className={
                                              pathname === subLink
                                                ? "py-1 text-sm font-semibold capitalize text-acm-blue-500"
                                                : "py-1 text-sm font-light capitalize"
                                            }
                                            onClick={handleBothBars}
                                          >
                                            <motion.div
                                              initial={
                                                subMobNavBarAnim(subIndex)
                                                  .initial
                                              }
                                              animate={
                                                subMobNavBarAnim(subIndex)
                                                  .animate
                                              }
                                              transition={{
                                                ...subMobNavBarAnim(subIndex)
                                                  .transition,
                                                delay:
                                                  (subIndex + 1) * 0.05 + 0.25,
                                                duration: 0.3,
                                              }}
                                            >
                                              {subName.toLowerCase()}
                                            </motion.div>
                                          </Link>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              </>
                            ) : (
                              <Link
                                href={link}
                                className={
                                  pathname === link
                                    ? "text-base font-semibold text-acm-blue-500"
                                    : "text-base font-light"
                                }
                                onClick={handleNavBar}
                              >
                                {name}
                              </Link>
                            )}
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>
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
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className="h-full w-[10vw] bg-white opacity-45"
              onClick={handleNavBar}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;

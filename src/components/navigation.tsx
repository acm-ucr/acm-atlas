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
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="border-acm-blue-400 grid grid-cols-5 border-b-3 p-5 shadow-xl">
      <Link
        className={
          pathname === "/" ? "text-acm-gray-500 text-2xl font-semibold" : ""
        }
        href="/"
      >
        ACM@UCR
      </Link>
      <div className="col-span-4 flex justify-end space-x-5 pr-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/about"
                className={pathname === "/about" ? "font-semibold" : ""}
              >
                ABOUT
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/board"
                className={pathname === "/board" ? "font-semibold" : ""}
              >
                BOARD
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/programs">PROGRAMS</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/programs/spark"
                  className={
                    pathname === "/programs/spark" ? "font-semibold" : ""
                  }
                >
                  SPARK
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/programs/forge"
                  className={
                    pathname === "/programs/forge" ? "font-semibold" : ""
                  }
                >
                  FORGE
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/programs/create"
                  className={
                    pathname === "/programs/create" ? "font-semibold" : ""
                  }
                >
                  CREATE
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/programs/das"
                  className={
                    pathname === "/programs/das" ? "font-semibold" : ""
                  }
                >
                  DAS
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/programs/bitbyte"
                  className={
                    pathname === "/programs/bitbyte" ? "font-semibold" : ""
                  }
                >
                  Bit/Byte
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/hacks"
                className={pathname === "/hacks" ? "font-semibold" : ""}
              >
                HACKS
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/events"
                className={pathname === "/events" ? "font-semibold" : ""}
              >
                EVENTS
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/join"
                className={pathname === "/join" ? "font-semibold" : ""}
              >
                JOIN US
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navigation;

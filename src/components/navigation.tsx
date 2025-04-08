import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className="border-acm-blue-400 grid grid-cols-5 border-b-3 p-5 shadow-xl">
      <Link className="text-acm-gray-500 text-2xl font-bold" href="/">
        ACM@UCR
      </Link>
      <div className="col-span-4 flex justify-end space-x-5 pr-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about">ABOUT</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/board">BOARD</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>PROGRAMS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/programs/spark">
                  SPARK
                </NavigationMenuLink>
                <NavigationMenuLink href="/programs/forge">
                  FORGE
                </NavigationMenuLink>
                <NavigationMenuLink href="/programs/create">
                  CREATE
                </NavigationMenuLink>
                <NavigationMenuLink href="/programs/das">
                  DAS
                </NavigationMenuLink>
                <NavigationMenuLink href="/programs/bitbyte">
                  Bit/Byte
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/hacks">HACKS</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/events">EVENTS</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/join">JOIN US</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navigation;

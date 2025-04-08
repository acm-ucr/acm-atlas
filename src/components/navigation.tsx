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
    <div className="border-acm-blue-400 flex border-b-3 p-5 shadow-xl">
      <Link className="text-acm-gray-500 ml-10 text-2xl font-bold" href="/">
        ACM@UCR
      </Link>

      <div className="mr-20 ml-auto flex justify-end space-x-5">
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
                <NavigationMenuLink>SPARK</NavigationMenuLink>
                <NavigationMenuLink>CREATE</NavigationMenuLink>
                <NavigationMenuLink>DAS</NavigationMenuLink>
                <NavigationMenuLink>Bit/Byte</NavigationMenuLink>
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

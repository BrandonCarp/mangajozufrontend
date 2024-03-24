"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MagnifyingGlassIcon, HomeIcon, ChevronDownIcon, BookOpenIcon, UserIcon, BookmarkIcon } from '@heroicons/react/24/outline';



// Notes
// hamburger menu side nav for mobile
// links from hamburger on nav when large screen

// search icon ok no signup
// saved anime requires signup/permission?
// user account

// create color schema, and default font

const linkOne = [

  { 
    name: "Browse", 
    href: "/anime",
    icon: ChevronDownIcon
  
  },

];

const linkTwo = [
  {
    name: "Search", 
    href: "/search", 
    icon : MagnifyingGlassIcon
  },
  {
    name: "Favorites", 
    href: "/favorites", 
    icon : BookmarkIcon
  },
  {
    name: "Profile", 
    href: "/profile", 
    icon : UserIcon
  },
 
 

];





export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex bg-gray-700 text-gray-300 items-center py-2 pr-10">
      <Link className="ml-10 mr-5 text-purple-300 hover:text-white flex" href="/">
        <BookOpenIcon className="w-6" />
        <p className="ml-1">mangajozu</p>
      </Link>

      {linkOne.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 hover:bg-black hover:h-full",
              {
                "": pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
            {LinkIcon && <LinkIcon className="w-6 h-6" />}
          </Link>
        );
      })}

      <div className="ml-auto ">
        <div className="flex ml-5">
          {linkTwo.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 hover:bg-black",
                  {
                    "": pathname === link.href,
                  }
                )}
              >
                {LinkIcon && <LinkIcon className="w-6 h-6" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

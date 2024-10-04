"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { navbarLinks } from "./static-links";
import BrowseButton from "./browseNav";
import SideNav from "./sideNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav
        data-testid="main-nav"
        role="navigation"
        // className="fixed top-0 left-0 right-0 z-50 flex bg-gray-700 text-gray-300 items-center h-[48px] "
         className=" flex bg-gray-700 text-gray-300 items-center h-[48px] "
      >
        <div className="flex items-center">
          <SideNav />
          <Link
            className="  md:ml-10  text-purple-300 hover:text-white flex"
            href="/"
          >
            <BookOpenIcon className="w-6" />
            <p className="ml-1 mr-5">mangajozu</p>
          </Link>
          <BrowseButton />
        </div>

        <div className="ml-auto">
          <div className="flex md:ml-5">
            {navbarLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "flex h-[48px] items-center justify-center gap-2  p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 hover:bg-gray-800 hover:text-white",
                    {
                      "": pathname === link.href,
                      "hidden md:block md:pt-3": link.name === "Favorites",
                    }
                  )}
                >
                  {LinkIcon && <LinkIcon className="w-6 h-6" />}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

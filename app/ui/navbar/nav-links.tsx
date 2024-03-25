"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {ChevronDownIcon, BookOpenIcon} from '@heroicons/react/24/outline';
import { Popover } from '@headlessui/react'
import { genreLinks } from "./static-links";
import { navbarLinks } from "./static-links";



export default function Navbar() {
  const pathname = usePathname();
  const [, off] = useState(false)
  return (
    <div className="flex bg-gray-700 text-gray-300 items-center  pr-10 h-[48px] ">
      <Link className="ml-10 mr-5 text-purple-300 hover:text-white flex" href="/">
        <BookOpenIcon className="w-6" />
        <p className="ml-1">mangajozu</p>
      </Link>


      <Popover className="w-full">
  <Popover.Button className="flex items-center h-[48px] p-3 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-none">
    <p className="pr-1">Browse</p><ChevronDownIcon className="w-6 h-6" />
  </Popover.Button>

<Popover.Panel className="absolute bg-gray-800 text-gray-300 p-2 pb-5 mt-1 rounded">
    <div className="flex ">
      <div className="flex flex-col border-right-solid">
        <a href="/analytics" className=" hover:text-white mb-2 p-1">Popular</a>
        <a href="/engagement" className="hover:text-white mb-2 p-1">New</a>
        <a href="/security" className="hover:text-white p-1">Developers Picks</a>
      </div>
      <div className="border-solid border mx-3 border-gray-600 mt-2"></div>
      {/*Side List  */}
      <div className="w-full"> {/* This div is made full width */}
        <p className="pl-[5px] pb-2">Genres</p>
        <div className="grid grid-rows-4 grid-flow-col gap-3">
          {genreLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-1 hover:text-white" 
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Popover.Panel>

 
</Popover>


  



      <div className="ml-auto ">
        <div className="flex ml-5">
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

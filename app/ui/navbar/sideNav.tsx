import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { genreLinks } from "./static-links";

import Link from "next/link";
export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed inset-0 bg-black opacity-50 z-50"
        ></div>
      )}
      <nav role="navigation" className="w-full block md:hidden z-50">
        <Popover>
          <Popover.Button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center h-[48px]  p-3  hover:text-white  focus:text-white border-none focus:outline-none focus:ring-0"
          >
            <Bars3Icon className="h-7 w-7" />
          </Popover.Button>

          <Popover.Panel className="absolute  bg-gray-700 text-gray-300 p-2 pb-5 mt-1  top-11">
            <div className="flex  flex-col">
              <p className="pl-1 text-sm text-white mb-2">Browse</p>
              <div className="flex flex-col border-right-solid">
                <a href="/analytics" className=" hover:text-white mb-2 p-1">
                  Popular
                </a>
                <a href="/engagement" className="hover:text-white mb-2 p-1">
                  New
                </a>
                <a href="/security" className="hover:text-white p-1">
                  Developers Picks
                </a>
              </div>
              <div className="border-solid border mx-3 border-gray-600 mt-2"></div>
              {/*Side List  */}
              <div className="w-full">
                <p className="pl-[5px] pb-2 mt-3">Genres</p>

                <div className="grid grid-rows-8 grid-flow-col gap-3">
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

                {/* <div className="grid grid-rows-4 grid-flow-col gap-3">
                {genreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="p-1 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </nav>
    </>
  );
}

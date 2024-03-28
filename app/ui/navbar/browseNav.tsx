import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { genreLinks } from "./static-links";
import Link from "next/link";

export default function BrowseButton() {
  return (
    <>
      <Popover className="w-full hidden md:block z-10">
        <Popover.Button className="flex items-center h-[48px] p-3 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-none">
          <p className="pr-1">Browse</p>
          <ChevronDownIcon className="w-6 h-6" />
        </Popover.Button>

        <Popover.Panel className="absolute mb-5  bg-gray-800 text-gray-300 p-2 pb-5 mt-1 top-11 ">
          <div className="flex ">
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
              {" "}
              {/* This div is made full width */}
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
    </>
  );
}

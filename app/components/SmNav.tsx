"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navlinks } from "../constans/nav-links";

const SmNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </div>
      {isOpen ? (
        <>
          <figure
            className={`absolute rounded-md right-2 origin-top  w-auto bg-slate-800 p-2 transition-all z-50 top-20 ${
              isOpen
                ? " scale-y-100 opacity-100 visible"
                : " scale-y-50 opacity-0 hidden"
            }`}
          >
            <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
              {navlinks.map((link, index) => (
                <Link
                  href={`#${link}`}
                  className="py-1 px-2 transition-all rounded-md  hover:bg-slate-700 hover:text-sky-700"
                  key={index}
                  onClick={toggleMenu}
                >
                  {link}
                </Link>
              ))}
            </nav>
          </figure>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SmNav;

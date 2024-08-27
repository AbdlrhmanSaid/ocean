import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navlinks } from "../constans/nav-links";
import SmNav from "./SmNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-50">
      <div className="realtive container py-6 flex justify-between transition-all">
        <Logo />
        <nav className="hidden md:flex gap-8 capitalize">
          {navlinks.map((navlink, index) => (
            <Link
              href={`#${navlink}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
              key={index}
            >
              {navlink}
            </Link>
          ))}
        </nav>
        <SmNav />
      </div>
    </header>
  );
};

export default Navbar;

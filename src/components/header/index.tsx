import Image from "next/image";
import React from "react";
import MenuIcon from "../icons/menu-icon";
import Link from "next/link";
import { navItems } from "@/constants/navbar";
import ChevronDownIcon from "../icons/chevron-down-icon";

export const Header = (): React.ReactElement => {
  return (
    <div className="home-container py-4 flex items-center justify-between lg:py-6 lg:justify-between">
      <div className="lg:flex lg:gap-12 lg:items-center">
        <Image src="/images/logo-full.svg" alt="UTeach logo" width={103} height={35} />
        {/* Desktop navbar */}
        <div className="hidden lg:flex space-x-12 font-medium">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={`nav-bar-item-${item.name}`}
              className={`${item.multiple ? "flex items-center gap-2" : ""}`}
            >
              {item.name}
              {item.multiple ? <ChevronDownIcon /> : null}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile navbar */}
      <button className="lg:hidden">
        <MenuIcon />
      </button>
      {/* Desktop auth links */}
      <div className="hidden lg:flex font-medium items-center gap-4">
        <Link href="#">Log In</Link>
        <Link href="#" className="py-3 px-7 border-2 border-[var(--blue-gray-900)] rounded-md">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

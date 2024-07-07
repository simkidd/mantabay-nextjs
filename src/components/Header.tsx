"use client";
import Logo from "@/assets/logos/Black White Real Estate Logo (4).png";
import Logo2 from "@/assets/logos/logo-white-2.png";
import MenuIcon from "@/components/MenuIcon";
import { navlist } from "@/data/MenuData";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // if (window.scrollY > lastScrollY && window.scrollY > 30) {
      if (window.scrollY > 30) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    return (
      href === pathname ||
      href === pathname.replace(/\/$/, "") ||
      pathname.startsWith(href + "/")
    );
  };

  return (
    <div
      className={`w-full h-[70px] md:h-[80px] lg:h-[150px] flex items-center font-kufam fixed z-10 transition-all duration-300 ease-in-out ${
        hideHeader
          ? "bg-white text-black lg:h-[80px] shadow-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-2 flex items-center justify-between w-full h-full">
        <Link href="/">
          {hideHeader ? (
            <div className="h-[50px]">
              <Image
                src={Logo}
                alt="logo"
                width={150}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="h-[50px] lg:h-[100px]">
              <Image
                src={Logo2}
                alt="logo"
                width={150}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </Link>

        <ul className="hidden lg:flex items-center space-x-8">
          {navlist.map((item, i) => (
            <MenuItem key={i} item={item} isActive={isActive} />
          ))}
        </ul>

        <button
          className="lg:hidden flex items-center justify-center size-10"
          onClick={() => setShowMenu(true)}
        >
          <MenuIcon className="text-3xl" />
        </button>
      </div>

      {/* mobile menu */}
      <ul
        className={`flex flex-col lg:hidden items-end gap-[66px] font-inter font-medium capitalize h-0 absolute top-0 w-full bg-primary-600 transition-all duration-500 ease-in-out overflow-hidden px-2 text-2xl ${
          showMenu && "left-0 py-8 h-dvh"
        }`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="text-white flex items-center justify-center size-10"
        >
          <XMarkIcon className="size-10" />
        </button>

        {navlist.map((item, i) => (
          <li
            key={i}
            className="hover:-translate-x-6 transition-all duration-[0.9s] ease-in-out px-8"
          >
            <Link
              href={item.href}
              className={`${
                isActive(item.href) ? "text-primary-100" : "text-white"
              }`}
              onClick={() => setShowMenu(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

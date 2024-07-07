import { Menu } from "@/data/MenuData";
import Link from "next/link";
import React from "react";

const MenuItem: React.FC<{
  item: Menu;
  isActive: (value: string) => boolean;
}> = ({ item, isActive }) => {
  const { href, label } = item;

  return (
    <li className="h-full ">
      <div className="w-full h-full">
        <Link
          href={href}
          className={`h-full flex justify-center items-center  hover:text-primary transition-all duration-300 ease-in-out  ${
            isActive(href) ? "!text-primary-500 font-semibold" : ""
          } `}
        >
          {label}
        </Link>
      </div>
    </li>
  );
};

export default MenuItem;

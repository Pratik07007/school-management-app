import Image from "next/image";
import React from "react";
import menuItems from "../lib/menuItems";

function Menu() {
  return (
    <div className="overflow-hidden">
      {menuItems.map((category) => (
        <div
          className="mt-6 px-1 text-center md:text-left font-light overflow-y-scroll "
          key={category.title}
        >
          <span className="text-sm md:text-lg ">{category.title}</span>
          {category.items.map((item) => (
            <div
              className="md:hover:bg-Purple duration-300 rounded-3xl p-3 px-3  flex justify-center md:justify-start lg:justify-start gap-2 w-full  cursor-pointer"
              key={item.label}
            >
              <Image src={item?.icon} alt="" width={20} height={20}></Image>
              <span className=" text-xs lg:text-md hidden  md:block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

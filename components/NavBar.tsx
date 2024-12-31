import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between w-full pt-4 mb-5 px-5">
      {/* SEACRH */}
      <div className="hidden md:flex md:items-center ">
        <div className="flex gap-2 items-center border-[1px] border-black rounded-full p-3">
          <Image src={"/search.png"} alt="" width={20} height={20} />
          <input
            placeholder="Search.."
            className=" placeholder:text-slate-200 outline-none h-5 bg-transparent w-80 text-black"
            type="text"
          />
        </div>
      </div>
      {/* OPTIONS */}
      <div className="flex items-center justify-end gap-2 p-2 w-full">
        <div className="flex items-center justify-center p-4 rounded-full bg-white ">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-full bg-white relative ">
          <div className="h-8 w-8 rounded-full absolute bottom-8 left-6 flex justify-center items-center bg-red-500">
            1
          </div>
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm">Pratik Dhimal</span>
          <span className="text-xs text-right text-gray-800">Student</span>
        </div>
        <Image
          className="rounded-full"
          src={"/avatar.png"}
          width={55}
          height={55}
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;

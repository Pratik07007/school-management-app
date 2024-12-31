import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* LEFT */}
      <div className="bg-red-50 w-1/6 min-h-screen">
        <Link
          className=" flex lg:justify-start items-center justify-center gap-3 pt-5"
          href={"/"}
        >
          <Image src={"/logo.png"} alt={""} width={30} height={30}></Image>
          <span className="hidden lg:block">MyThirdTeacher</span>
        </Link>
        {/* Menu */}
        <Menu />
      </div>
      {/* RIGHT */}
      <div className=" w-5/6 h-screen bg-slate-400">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default layout;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../../components/Menu";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* LEFT */}
      <div className="bg-red-50 w-1/6 h-screen">
        <Link
          className=" flex justify-start items-center justify-center gap-3 p-3"
          href={"/"}
        >
          <Image src={"/logo.png"} alt={""} width={30} height={30}></Image>
          <span className="hidden lg:block">MyThirdTeacher</span>
        </Link>
        {/* Menu */}
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="bg-blue-400 w-5/6 h-screen">c</div>
    </div>
  );
}

export default layout;

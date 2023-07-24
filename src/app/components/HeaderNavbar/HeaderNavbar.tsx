"use client";
import Image from "next/image";

import { BiSearch, BiCurrentLocation, BiChevronDown } from "react-icons/bi";
import UserManager from "../UserManager";
import LinksNavbar from "./LinksNavbar";
const HeaderNavbar = () => {
  return (
    <div className="">
      <nav className="  flex items-center gap-3 h-20 py-3  max-md:h-14 px-8  max-sm:px-3 justify-between border-b border-slate-100">
        <div className="logo min-w-[76px] max-w-[96px] ">
          <Image
            width={500}
            height={200}
            src={"/logo.png"}
            className="w-full"
            alt="Logo iRango"
          />
        </div>
        <div className="max-xl:hidden">
          <LinksNavbar />
        </div>
        <div className="searchArea flex w-full h-[80%] items-center max-w-lg max-lg:max-w-sm max-md:hidden xl:flex-1 bg-slate-100 rounded-md min-w-[280px]">
          <span className="icon text-2xl px-2 text-red-500">
            <BiSearch />
          </span>
          <input
            type="text"
            className="w-full h-full outline-none focus:outline-none bg-transparent  placeholder:text-sm text-sm placeholder:font-light"
            placeholder="Busque por lojas ou item"
          />
        </div>

        <div className="userLocation flex items-center gap-1   h-[80%]   text-sm font-light text-slate-600 rounded-md cursor-pointer    transition-all hover:text-red-500">
          <span className="icon text-2xl px-2 text-red-500">
            <BiCurrentLocation />
          </span>
          <span className="max-sm:hidden">Nova Iguaçu, RJ</span>
          <span className="icon text-2xl px-2 text-red-500">
            <BiChevronDown />
          </span>
        </div>
        <span className="max-lg:hidden">
          <UserManager />
        </span>
      </nav>
      <div className="hidden  overflow-x-auto LinksNavbarSwipperWrapper max-xl:flex w-full sm:justify-center items-center py-2 ">
        <LinksNavbar />
      </div>
    </div>
  );
};

export default HeaderNavbar;

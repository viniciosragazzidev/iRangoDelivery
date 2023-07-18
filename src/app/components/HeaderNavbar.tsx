"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch, BiCurrentLocation, BiChevronDown } from "react-icons/bi";
import UserManager from "./UserManager";
const HeaderNavbar = () => {
  const path = usePathname();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(path);
  }, [path]);
  return (
    <nav className="menu flex items-center gap-3 h-20 py-3 px-8 justify-between">
      <div className="logo min-w-[76px] max-w-[96px] ">
        <Image
          width={500}
          height={200}
          src={"/logo.png"}
          className="w-full"
          alt="Logo iRango"
        />
      </div>
      <ul className="flex items-center max-xl:hidden ">
        {[
          ["Início", "/"],
          ["Restaurantes", "/restaurante"],
          ["Bebidas", "/bebidas"],
          ["Farmácias", "/farmacia"],
          ["Pets", "/pets"],
        ].map(([title, url]) => (
          <Link
            key={title}
            href={url}
            className={`${
              pathname == url ? "text-red-500 font-bold" : "text-slate-500"
            } rounded-lg px-3 py-2   text-sm font-normal hover:bg-slate-100 hover:text-red-500 transition-all`}
          >
            {title}
          </Link>
        ))}
      </ul>
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
  );
};

export default HeaderNavbar;

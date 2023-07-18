"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiUserCircle, BiCartAlt } from "react-icons/bi";
import UserConfigs from "./UserConfigs";

const UserManager = () => {
  const { data: session } = useSession();
  const [openConfig, setOpenConfig] = useState(false);

  const handleClick = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <div className=" flex justify-center items-center ">
      {session ? (
        <>
          <UserConfigs openConfig={openConfig} />

          <div className="flex items-center gap-2">
            <span
              className="icon text-3xl  text-red-500 cursor-pointer hover:scale-95 transition-all"
              onClick={() => {
                handleClick();
              }}
            >
              <BiUserCircle />
            </span>
            <div className="cartArea max-sm:hidden flex gap-2 rounded-full items-center cursor-pointer hover:bg-slate-100  transition-all px-3  py-1">
              <span className="icon text-3xl  text-red-500  hover:scale-95 transition-all">
                <BiCartAlt />
              </span>
              <div className="flex text-slate-500 flex-col items-center">
                <span className=" text-[0.70rem]">R$ 0,00</span>
                <span className=" text-[0.70rem]">0 itens</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <span
            onClick={() => {
              signIn("google");
            }}
            className="px-4 py-2 text-sm text-slate-500  hover:text-red-500 cursor-pointer  rounded-lg transition-all "
          >
            Entrar
          </span>
          <span className="px-4 py-2 text-sm text-slate-100  hover:scale-95 cursor-pointer whitespace-nowrap  rounded-lg transition-all bg-red-500">
            Criar conta
          </span>
        </div>
      )}
    </div>
  );
};

export default UserManager;

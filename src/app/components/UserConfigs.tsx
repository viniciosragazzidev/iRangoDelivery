import { useSession, signIn, signOut } from "next-auth/react";

import React from "react";
import {
  BiBuoy,
  BiCard,
  BiChat,
  BiCreditCard,
  BiHeart,
  BiHelpCircle,
  BiLock,
  BiLogOut,
  BiPaperPlane,
  BiSlider,
} from "react-icons/bi";

interface IData {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}
const UserConfigs = ({ openConfig }: { openConfig: boolean }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`userConfigModal w-screen z-[9999] h-[calc(100vh-4.5rem)] sm:h-[calc(100vh-6rem)] lg:h-[calc(100vh-10rem)] overflow-y-auto max-w-xs lg:max-w-xs py-10 lg:mr-10 top-0 right-0 fixed bg-slate-50 lg:mt-16  ${
        openConfig
          ? " opacity-100 translate-y-0  visible"
          : "opacity-0 translate-y-[-20px] invisible  "
      } transition-all`}
    >
      <h1 className="text-2xl font-bold text-slate-800 px-8 pb-8 ">
        Olá, {session?.user?.name}
      </h1>

      <nav className="flex flex-col justify-center  gap-2 text-sm ">
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            {" "}
            <BiChat />
          </span>{" "}
          <span>Chats</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            {" "}
            <BiPaperPlane />
          </span>{" "}
          <span>Pedidos</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            {" "}
            <BiHeart />
          </span>{" "}
          <span>Favoritos</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            {" "}
            <BiCreditCard />
          </span>{" "}
          <span>Pagameto</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            <BiBuoy />
          </span>{" "}
          <span>Ajuda</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            <BiSlider />
          </span>{" "}
          <span>Ajustes</span>
        </li>
        <li className="px-8 py-4 flex gap-8 items-center cursor-pointer hover:bg-slate-100">
          <span className="text-2xl text-red-500">
            {" "}
            <BiLock />
          </span>{" "}
          <span>Segurança</span>
        </li>
        <li
          onClick={() => {
            signOut();
          }}
          className=" flex items-center justify-center py-4 px-8 rounded-md my-3  gap-8  self-center cursor-pointer bg-red-500 hover:bg-red-600 transition-all hover:scale-95 text-slate-50 "
        >
          <span className="text-2xl ">
            {" "}
            <BiLogOut />
          </span>{" "}
          <span>Sair da conta</span>
        </li>
      </nav>
    </div>
  );
};

export default UserConfigs;

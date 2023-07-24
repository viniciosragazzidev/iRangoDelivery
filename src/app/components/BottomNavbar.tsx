import { BiHomeAlt, BiPaperPlane, BiPaperclip, BiSearch } from "react-icons/bi";
import UserManager from "./UserManager";

const BottomNavbar = () => {
  return (
    <nav className=" menu w-full h-20 max-sm:h-16  items-center fixed bottom-0 left-0 px-8  max-sm:px-4 hidden max-lg:flex z-40 bg-white">
      <ul className="flex items-center justify-between w-full">
        <li className="flex flex-col text-center  items-center text-sm max-sm:text-xs  text-slate-700">
          <span className="text-2xl max-sm:text-xl mb-[2px]">
            <BiHomeAlt />
          </span>
          <span>Início</span>
        </li>
        <li className="flex flex-col text-center  items-center text-sm max-sm:text-xs text-slate-700">
          <span className="text-2xl max-sm:text-xl mb-[2px]">
            <BiSearch />
          </span>
          <span>Buscar</span>
        </li>
        <li className="flex flex-col text-center  items-center text-sm max-sm:text-xs text-slate-700">
          <span className="text-2xl max-sm:text-xl mb-[2px]">
            <BiPaperPlane />
          </span>
          <span>Pedidos</span>
        </li>

        <UserManager />
      </ul>
    </nav>
  );
};

export default BottomNavbar;

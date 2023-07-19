import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const LinksNavbar = () => {
  const path = usePathname();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(path);
  }, [path]);
  return (
    <ul className="flex items-center  ">
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
            pathname == url
              ? "text-red-500 font-bold"
              : "text-slate-500 font-normal"
          } rounded-lg px-3 py-2 max-xl:px-2   text-sm  hover:bg-slate-100 hover:text-red-500 transition-all`}
        >
          {title}
        </Link>
      ))}
    </ul>
  );
};

export default LinksNavbar;

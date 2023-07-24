"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
const LoadComponent = () => {
  const [openLoad, setOpenLoad] = useState(true);
  const { data: session } = useSession();
  useEffect(() => {
    setOpenLoad((state) => (state = false));
    console.log("false");
  }, [session]);

  return (
    <div
      className={`grid place-content-center w-full h-screen fixed  top-0 left-0 bg-slate-100 z-50 ${
        openLoad ? "visible" : "invisible"
      }`}
    >
      <div className="loadItem flex text-2xl gap-2 items-center text-red-500">
        <span className="dot">
          <PiHamburgerBold />
        </span>
        <span className="dot">
          <PiHamburgerBold />
        </span>
        <span className="dot">
          <PiHamburgerBold />
        </span>
      </div>
    </div>
  );
};

export default LoadComponent;

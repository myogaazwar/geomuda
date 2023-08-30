"use client";

// ** Import Assets

import { navItems } from "@/constanst/navItems";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex fixed top-0 w-full text-white items-center justify-between py-8 px-32 ${
        scroll > 0
          ? "bg-green-600 z-50 transition duration-1000"
          : "bg-transparent duration-500"
      }`}
    >
      <h1 className="text-3xl font-bold">Logo</h1>

      <div className="flex gap-5">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="border cursor-pointer border-white px-4 py-2 rounded-xl"
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

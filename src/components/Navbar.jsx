import React from "react";
import { FaHome, FaUser, FaImages, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: <FaHome size={22} />, label: "Home", href: "#home" },
  { icon: <FaUser size={22} />, label: "About", href: "#about" },
  { icon: <FaImages size={22} />, label: "Portfolio", href: "#portfolio" },
  { icon: <FaEnvelope size={22} />, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed top-1/2 left-4 -translate-y-1/2 flex flex-col space-y-4 z-50",
        "sm:left-6 sm:space-y-5"
      )}
    >
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="relative group flex items-center"
        >
          {/* Icon Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full bg-white text-gray-700 hover:bg-black hover:text-white transition-all duration-300 shadow-md",
              "w-10 h-10 sm:w-12 sm:h-12"
            )}
          >
            {item.icon}
          </Button>

          {/* Hover Label */}
          <span
            className={cn(
              "absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 bg-black text-white font-medium text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl",
              "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-left shadow-lg whitespace-nowrap"
            )}
          >
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Navbar;

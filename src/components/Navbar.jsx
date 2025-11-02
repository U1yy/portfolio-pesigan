import React from "react";
import { FaHome, FaUser, FaImages, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: <FaHome size={26} />, label: "Home", href: "#home" },
  { icon: <FaUser size={26} />, label: "About", href: "#about" },
  { icon: <FaImages size={26} />, label: "Portfolio", href: "#portfolio" },
  { icon: <FaEnvelope size={26} />, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col space-y-5 z-50">
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
              "rounded-full bg-white text-gray-700 hover:bg-black hover:text-white transition-all duration-300 shadow-md"
            )}
          >
            {item.icon}
          </Button>

          {/* Hover Label */}
          <span
            className={cn(
              "absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white font-medium text-sm px-4 py-2 rounded-2xl",
              "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 origin-left shadow-lg whitespace-nowrap"
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

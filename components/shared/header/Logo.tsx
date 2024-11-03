import Link from "next/link";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import SidebarWithToggle from "../sidebar/SidebarWithToggle";

const Logo = () => {
  return (
    <div className="flex items-center space-x-5 border border-black py-3 px-8">
      <FaBarsStaggered />
      <span className="">Media</span>
    </div>
  );
};

export default Logo;

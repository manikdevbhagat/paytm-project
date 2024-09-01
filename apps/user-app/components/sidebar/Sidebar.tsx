import React from "react";
import SidebarItem from "./SidebarItem";
import { Home, ArrowLeftRight, Clock } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-gray-100">
      <nav className="h-full py-12 flex flex-col gap-2 items-start px-2 text-sm font-medium lg:px-4 border-r-[1px] border-r-gray-200">
        <SidebarItem
          Icon={<Home className="h-4 w-4" />}
          text="Home"
          link="/dashboard"
        />
        <SidebarItem
          Icon={<ArrowLeftRight className="h-4 w-4" />}
          text="Transfer"
          link="/transfer"
        />
        <SidebarItem
          Icon={<Clock className="h-4 w-4" />}
          text="Transactions"
          link="/transactions"
        />
      </nav>
    </div>
  );
};

export default Sidebar;

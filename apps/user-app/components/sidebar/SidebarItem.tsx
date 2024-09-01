"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type SidebarItemProps = {
  Icon: ReactNode;
  text: string;
  link: string;
};

const SidebarItem = ({ Icon, text, link }: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 ${
        pathname === link ? "text-primary bg-gray-200" : "text-muted-foreground"
      } transition-all hover:text-primary`}
    >
      {Icon}
      {text}
    </Link>
  );
};

export default SidebarItem;

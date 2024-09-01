import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full">
      <div className="w-[200px] h-full">
        <Sidebar />
      </div>
      <div className="flex-1 h-full overflow-auto">{children}</div>
    </div>
  );
};

export default layout;

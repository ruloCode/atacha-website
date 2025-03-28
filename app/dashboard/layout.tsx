import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-40 fixed top-0 md:relative md:top-none z-20 bg-black">
      </div>
      
      <div className="flex-grow p-4   bg-white relative mt-[96px] md:mt-0  ">
        {children}
      </div>
    </div>
  );
};

export default layout;

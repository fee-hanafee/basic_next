import React from "react";
import Welcome from "./Welcome";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12    h-[calc(100vh-3.5rem)] ">
      <div className="col-span-4 h-full md:col-span-6 ">
        <Welcome />
      </div>
      <div className="col-span-8 md:col-span-6">
        <div className="w-full flex justify-center items-center h-full">
          <div className="w-[60%] flex flex-col gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

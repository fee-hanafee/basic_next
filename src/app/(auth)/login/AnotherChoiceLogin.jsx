import React from "react";
import { FacebookIcon, GoogleIcon, AppleIcon } from "@/app/icons/Icon";

const choice = [
  { icon: <FacebookIcon />, id: 1 },
  { icon: <GoogleIcon />, id: 2 },
  { icon: <AppleIcon />, id: 3 },
];

export default function AnotherChoiceLogin() {
  return (
    <div className="">
      <div className="border-t text-center relative pb-[2rem]">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-[0.8rem] bg-white px-4 text-gray-500 font-semibold text-sm">
          or do it via other accounts
        </span>
      </div>
      <div className="flex gap-3 justify-center">
        {choice.map((el) => (
          <div
            key={el.id}
            className="text-center p-2 border hover:shadow-md border-gray-400 rounded-full hover:bg-blue-600 transition"
            role="button"
          >
            {el.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

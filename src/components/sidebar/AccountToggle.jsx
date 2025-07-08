import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const AccountToggle = () => {
  return (
    <div className="  mb-4 mt-2 pb-4 border-b border-stone-300  ">
      <button className="relative w-full flex items-center gap-2 p-0.5 hover:bg-stone-200 rounded transition-color   ">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg?seed=peyush"
          alt="avatar"
          width={32}
          height={32}
          className="size-10 lg:size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="hidden lg:flex text-start">
          <span className="text-sm font-bold block">Peyush nuwal</span>
          <span className="text-xs block text-stone-500">Peyush-nuwal.dev</span>
        </div>
        <FiChevronDown className="hidden lg:block absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="hidden lg:block absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};

export default AccountToggle;

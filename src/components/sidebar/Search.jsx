"use client";

import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandMenu";


const Search = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={()=> setOpen(true)} className="relative flex items-center max-lg:justify-center  mb-4 px-2 lg:px-2   py-2 lg:py-1.5 text-sm bg-stone-200   rounded">
        <FiSearch className="mr-0  lg:mr-2 max-lg:text-2xl" />

        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="hidden lg:block w-full bg-transparent placeholder:text-stone-200 lg:placeholder:text-stone-400 focus:outline-none"
        />
        <span className="hidden lg:flex p-1 text-xs  gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Search;

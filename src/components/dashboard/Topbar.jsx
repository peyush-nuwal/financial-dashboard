import React from "react";
import { FiCalendar } from "react-icons/fi";
const Topbar = () => {
    return (
      <div className="border-b border-stone-200 px-4 pb-4 mt-2 mb-4">
        <div className="flex  items-start lg:items-center justify-between p-0.5">
          <div className="">
            <span className="text-sm lg:text-base font-bold block">
             Good morning, Tom!
            </span>
            <span className="text-xs block text-stone-500">
              Tuesday, Aug 8th 2023
            </span>
          </div>
          <button className="flex text-xs lg:text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
            <FiCalendar />
            <span>Prev 6 Months</span>
          </button>
        </div>
      </div>
    );
};

export default Topbar;

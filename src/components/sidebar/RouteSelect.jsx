import React from 'react'
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

export  const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUsers} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  );
};

const Route = ({
    selected,Icon,title
}) => {
    return (
      <button
        className={`flex items-center justify-center lg:justify-start gap-2 w-full rounded px-2   py-2 lg:py-1.5 tex-2xl lg:text-sm transition-[box-shadow,_background-color,_color] ${
          selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`}
      >
        <Icon className={selected ? "text-violet-500" : ""} />
        <span className="hidden lg:block">{title}</span>
      </button>
    );
}

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";
import { DialogTitle } from "@radix-ui/react-dialog";

const CommandMenu = ({ open, setOpen }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
           }
        }
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [])
    
  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      onClick={() => setOpen(false)}
      className="fixed inset-0 bg-stone-950/50"
    >
      <DialogTitle className="sr-only">Command Menu</DialogTitle>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg mx-auto mt-12 bg-white rounded-lg shadow-x; border-stone-300 border overflow-hidden "
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>

          <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="text-sm text-stone-400 mb-3"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiLink />
              Link Services
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPhone />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2">
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;

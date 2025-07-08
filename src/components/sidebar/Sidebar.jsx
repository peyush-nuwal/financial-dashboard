import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search';

const Sidebar = () => {
  return (
    <div>
      <AccountToggle />
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <Search/>
      </div>
    </div>
  );
}

export default Sidebar
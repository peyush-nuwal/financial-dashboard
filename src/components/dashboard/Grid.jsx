import React from 'react'
import {StatCards} from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'
import {RecentTransactions} from './RecentTransactions'

const Grid = () => {
  return (
    <div className="grid  grid-cols-12 px-4 gap-3">
      <div className="col-span-12">
        <StatCards />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <ActivityGraph />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <UsageRadar />
      </div>
      <div className="col-span-12  ">
      <RecentTransactions />
      </div>
    </div>
  );
}

export default Grid
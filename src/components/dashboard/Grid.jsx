import React from 'react'
import {StatCards} from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'
import {RecentTransactions} from './RecentTransactions'

const Grid = () => {
  return (
      <div className='grid grid-cols-12 px-4 gap-3'>
          <StatCards/>
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions/>
    </div>
  )
}

export default Grid
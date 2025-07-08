import React from 'react'
import Topbar from './Topbar';
import Grid from './Grid';

const Dashboard = () => {
  return <div className="bg-white rounded-lg pb-4 shadow min-h-screen">
    <Topbar />
    <Grid/>
  </div>;
}

export default Dashboard
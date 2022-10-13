import React from 'react';
import "./charts.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: "January", total:1200
  },
  {
    name: "February",
    total: 3000,
    
  },
  {
    name: 'March',
    total: 2000,
   
  },
  {
    name: 'April',
    total: 2780,
   
  },
  {
    name: 'May',
    total: 1890,
  
  },
  {
    name: 'June',
    total: 2390,
  }
  
];

const Charts = () => {

  return (
    <div className="chart">
<div className="title">Last Six Month Revenue</div>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>  </div>
  )
}

export default Charts

import React from "react"
import StatCard from "./StatCard"

export default function Stats() {
  const stats = [
    {
      header: "Total Users",
      value: "71,890",
      id: 1,
    },
    {
      header: "Avg. Open Rate",
      value: "43.16%",
      id: 2,
    },

    {
      header: "Avg. Click Rate",
      value: "23.16%",
      id: 3,
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold">Stats</h1>
      <div className=" bg-gray-100 h-1/4 rounded-md p-2.5 ">
        <h5 className="text-gray-700">Last 30 days</h5>

        <div className="flex flex-row">
          {stats.map(stat => (
            <StatCard key={stat.id} header={stat.header} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  )
}

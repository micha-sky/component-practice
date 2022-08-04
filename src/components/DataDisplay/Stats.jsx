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
    <div className="grid gap-4 grid-cols-3 ">
      {stats.map(stat => (
        <StatCard key={stat.id} header={stat.header} value={stat.value} />
      ))}
    </div>
  )
}

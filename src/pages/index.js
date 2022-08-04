import React from "react"
import Stats from "../components/DataDisplay/Stats"

export default function Home() {
  return (
    <div className="bg-gray-100 max-w-full p-10">
      <h3 className="text-sm font-medium  ">Last 30 days</h3>
      <Stats />
    </div>
  )
}

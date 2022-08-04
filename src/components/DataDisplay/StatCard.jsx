import React from "react"

export default function StatCard(props) {
  return (
    <div className="p-10 bg-slate-50 m-10 border-r-slate-300">
      <h1 className="text-sm text-gray-500">{props.header}</h1>
      <h1 className="text-2xl font-bold ">{props.value}</h1>
    </div>
  )
}

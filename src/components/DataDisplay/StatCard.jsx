import React from "react"

export default function StatCard(props) {
  return (
    <div className="p-8 bg-slate-50 w-1/3 m-2.5 rounded-md ">
      <h1 className="text-sm text-gray-500">{props.header}</h1>
      <h1 className="text-2xl font-bold ">{props.value}</h1>
    </div>
  )
}

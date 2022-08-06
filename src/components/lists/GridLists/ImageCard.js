import React from "react"

export default function ImageCard({ url, name, size }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <img className="rounded-md" src={url} alt={name} />
    </div>
  )
}

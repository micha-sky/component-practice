import React from "react"
import ImageCard from "./ImageCard"

export default function ImageDetails() {
  const images = [
    {
      url: "https://picsum.photos/200",
      id: 1,
      name: "Face",
      size: "3MB",
    },
    {
      url: "https://picsum.photos/200",
      id: 2,
      name: "Leg",
      size: "4MB",
    },
    {
      url: "https://picsum.photos/200",
      id: 3,
      name: "Cringe",
      size: "3MB",
    },
    {
      url: "https://picsum.photos/200",
      id: 4,
      name: "Bianci",
      size: "33MB",
    },
  ]

  return (
    <div>
      <h1 className="text-lg">Image Details</h1>
      <div className=" bg-gray-100 h-1/4 rounded-md p-2.5 ">
        {images.map(image => (
          <ImageCard
            key={image.id}
            url={image.url}
            name={image.name}
            size={image.size}
          />
        ))}
      </div>
    </div>
  )
}

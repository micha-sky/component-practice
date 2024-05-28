import React from "react"
import Stats from "../components/DataDisplay/Stats"
import ImageDetails from "../components/lists/GridLists/ImageDetails";

export default function Home() {
  return (
    <div className="md:container mx-auto bg-white max-w-full">
      <Stats />
      <ImageDetails />
    </div>
  )
}

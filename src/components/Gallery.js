import React from "react";
import { useParams } from "react-router-dom";

function Gallery() {
  const { category } = useParams();

  // Here you should fetch the photos for this category and display them in a grid.
  // For now, we'll just display the category.

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">Category: {category}</h1>
    </div>
  );
}

export default Gallery;


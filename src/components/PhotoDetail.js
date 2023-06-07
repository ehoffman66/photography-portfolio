import React from "react";
import { useParams } from "react-router-dom";

function PhotoDetail() {
  const { id } = useParams();

  // Here you should fetch the photo with this ID and display it.
  // For now, we'll just display the ID.

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">Photo ID: {id}</h1>
    </div>
  );
}

export default PhotoDetail;


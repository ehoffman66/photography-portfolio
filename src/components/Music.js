// Music.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import musicData from '../data/music.json';

function Music() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    setImagePaths(musicData);
  }, []);

  const handleClick = (path) => {
    setSelectedImage(path);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

// Code snippet from Portraits.js (same changes apply for Music.js and Events.js)

return (
    <div className="portraits-container">
      <h1 className="header-text">Music</h1>
      <div className="flex flex-wrap justify-start">
        {imagePaths.map((item, index) => (
          <div className="m-1 w-1/2 sm:w-1/3 lg:w-1/4" key={index}>
            <img
              className="w-full"
              src={item.path}
              alt={item.alt}
              onClick={() => handleClick(item.path)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal">
            <img src={selectedImage} alt="Portrait" />
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Music;

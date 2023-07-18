import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
import portraitData from '../data/portraits.json';

function Portraits() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imagePaths, setImagePaths] = useState([]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex < imagePaths.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImage(process.env.PUBLIC_URL + imagePaths[newIndex].path);
      setSelectedImageIndex(newIndex);
    }
  }, [selectedImageIndex, imagePaths]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImage(process.env.PUBLIC_URL + imagePaths[newIndex].path);
      setSelectedImageIndex(newIndex);
    }
  }, [selectedImageIndex, imagePaths]);

  useEffect(() => {
    navigate('/portraits');
    setImagePaths(portraitData);
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  const handleClick = (path, index) => {
    setSelectedImage(path);
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedImageIndex(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div>
      <Helmet>
        <title>Portraits - Erik Hoffman Photos</title>
        <meta
          name="description"
          content="Explore stunning portrait photography by Erik Hoffman. Capturing moments and emotions through the lens."
        />
      </Helmet>
      <div className="gallery-container">
        <nav className="menu">
          {/* Add your responsive menu items here */}
        </nav>
        <h1 className="header-text">PORTRAITS</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imagePaths.map((item, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => handleClick(process.env.PUBLIC_URL + item.path, index)}
            >
              <img src={process.env.PUBLIC_URL + item.path} alt={item.alt} />
            </div>
          ))}
        </Masonry>
        {selectedImage && (
          <div className="overlay" onClick={handleClose}>
            <div className="modal">
              <span className="close" onClick={handleClose}><i className="fas fa-times"></i></span>
              <img src={selectedImage} alt="Portrait" />
              {selectedImageIndex > 0 && (
                <button className="prev" onClick={handlePrev}>
                  <i className="fas fa-chevron-left"></i>
                </button>
              )}
              {selectedImageIndex < imagePaths.length - 1 && (
                <button className="next" onClick={handleNext}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portraits;

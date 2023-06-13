import React from 'react';
import './About.css';
import profileImage from '../images/profile-image.png';

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="text-container">
        <h1>About Me</h1>
        <p>Hey there! I'm a Baltimore, Maryland-based photographer with over a decade of experience capturing unforgettable moments. My true passion lies in the art of portrait photography, where I get to bring out the unique personalities and emotions of my subjects. From candid moments to posed portraits, I love creating images that reflect the true essence of individuals and their connections.</p>
        <p>When it comes to weddings, I'm there to document every precious moment of your special day. From the nervous excitement of getting ready to the heartfelt exchanges of vows and the joyous celebration that follows, I'll be by your side capturing it all. I believe in telling the story of your love through my lens, creating images that you'll cherish for a lifetime.</p>
        <p>While portraits and weddings are my specialty, I also have a keen eye for capturing the beauty of landscapes and the hidden details in nature. Exploring breathtaking settings and finding unique perspectives is always an adventure for me.</p>
        <p>So, if you're looking for a photographer who can create stunning portraits, capture the magic of your wedding day, or immortalize the beauty of nature, I'd be honored to work with you. Let's collaborate and bring your vision to life!</p>
      </div>
    </div>
  );
}

export default About;

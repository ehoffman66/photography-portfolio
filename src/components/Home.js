// Home.js

import React from 'react';
import '../App.css'; // or '../MyComponent.css'

const Home = () => {
    console.log("Home component loaded"); // Add console log
    return (
        <div>
            <h1 className="header-text">Home Page</h1>
            <p>Welcome to my photography portfolio!</p>
        </div>
    );
}

export default Home;

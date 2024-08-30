import React from "react";

const Home = ({setShowHomePage,showHomePage}) => {
  return (
    <div className="home-page-main">
      <div className="content">
        <span className="speaker-text"> Add speaker</span>
        <button className="speaker-button" onClick={()=>setShowHomePage(!showHomePage)}> Add Speaker</button>
      </div>
    </div>
  );
};

export default Home;
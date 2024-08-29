import React from "react";
import crossIcon from "../assets/images/close-icon.png";
const UserPage = ({ setShowHomePage, showHomePage }) => {
  return (
    <div className="userpage-continer">
      <div className="speaker-list-container">
        <div className="header">
          <span className="text">Add Speaker </span>
          <img
            src={crossIcon}
            alt="cross-icon"
            className="croos-icon"
            onClick={() => setShowHomePage(!showHomePage)}
          />
        </div>
        <div className="content"> </div>
        <div className="footer">
          <div className="action">
            <button className="btn add"> Add</button>
            <button className="btn cancel">Cancel </button>

             </div>
           <span className="text"> Create a speaker</span>
          </div>
           
      </div>
    </div>
  );
};

export default UserPage;
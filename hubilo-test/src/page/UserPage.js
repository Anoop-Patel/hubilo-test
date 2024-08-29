import React from "react";
import crossIcon from "../assets/images/close-icon.png";
import searchIcon from "../assets/images/MagnifyingGlass.png";

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
        <div className="search-bar-container">
          <div className="search-bar">
            <img src={searchIcon} alt="search-icon" className="search-icon" />
            <input type="search" placeholder="Search..." aria-label="Search" />
          </div>
        </div>
        <div className="user-box-container">
          <div class="speaker-box">
            <div class="user-details">
              <img src={searchIcon} class="user-avatar" alt="user"/> 
              <div class="user-info">
                <h4 class="user-name">Eleanor Pena</h4>
                <p class="user-role">President of Sales | XYZ Organisation</p>
               
              </div>
             
            </div>
            <div class="edit-button">
              <button>Edit Speaker</button>
            </div>
          </div>

        
        </div>
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

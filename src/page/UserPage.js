import React, { useState } from "react";
import crossIcon from "../assets/images/close-icon.png";
import searchIcon from "../assets/images/MagnifyingGlass.png";
import Edit from "../assets/images/black_edit.png";
import { UserData } from "../UserData";

const UserPage = ({ setShowHomePage, showHomePage }) => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (userId) => {
    setSelectedUserIds(prevSelectedUserIds => {
      if (prevSelectedUserIds.includes(userId)) {
       
        return prevSelectedUserIds.filter(id => id !== userId);
      } else {
        return [...prevSelectedUserIds, userId];
      }
    });
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleAdd=()=>{
    if(selectedUserIds.length!=0){
      alert("YOU ADD SPEAKER SUCCESSFULLY")
    }
  }
  const handleCancel=()=>{
    setSelectedUserIds([]);
  }

  const filteredUsers = UserData.filter(user =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.userRole.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
            <input type="search" placeholder="Search..." aria-label="Search"  value={searchTerm}
              onChange={handleSearchChange} />
          </div>
        </div>
        <div className="user-box-container">
          {filteredUsers?.map((user) => (
            <div
              key={user.id}
              className={`speaker-box ${selectedUserIds.includes(user.id) ? 'active' : ''}`}
            >
              <div className="user-details">
                <img src={user.userAvatar} className="user-avatar" alt="user" />
                <div className="user-info">
                  <h4 className="user-name">{user.userName}</h4>
                  <p className="user-role">{user.userRole}</p>
                </div>
              </div>
              <div className="edit-button">
                <img src={Edit} alt="edit" className="edit-icon" />
                <span className="subtitle2">Edit Speaker</span>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="speaker-checkbox"
                  checked={selectedUserIds.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </div>
            </div>
          ))}
        {filteredUsers.length==0 && <span>No result found. Please check your filters.</span>}

        </div>
        <div className="footer">
          <div className="action">
            <button className={`btn add ${selectedUserIds.length !=0?"active":""}`} disable={selectedUserIds.length ==0} onClick={()=>handleAdd()}> Add</button>
            <button className="btn cancel" onClick={()=>handleCancel()}>Cancel </button>
          </div>
          <span className="text"> Create a speaker</span>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

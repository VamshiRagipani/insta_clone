import React from 'react';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import "../../Styles/header.css";
import SavedStatus from './SavedStatus';

const Header = ({ myInfo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: '100%', marginTop: "15vh" }}>
      <div style={{ display: "flex", justifyContent: "center", color: 'white', width: '80%' }}>
        <div style={{ paddingRight: '20px' }}>
          <img
            style={{
              width: '200px', // Adjust the width as needed
              height: '200px', // Adjust the height as needed
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            src={myInfo.profilePic}
            alt="Profile"
          />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "20px" }}>{myInfo.username}</span>
            <span className="profile_header_button"> Edit Profile</span>
            <span className="profile_header_button"> View Archive</span>
            <span> <SettingsApplicationsIcon /> </span>
          </div>

          <div style={{ display: "flex", justifyContent: 'space-around', marginTop: "20px" }}>
            <span>{myInfo.post} posts</span>
            <span>{myInfo.followers} followers</span>
            <span>{myInfo.following} following</span>
          </div>

          <div style={{ marginTop: "20px", marginLeft: "20px", fontWeight: 'bold' }}>
            {myInfo.name}
          </div>

          <p style={{ marginLeft: "20px" }}>
            {myInfo.Bio}
          </p>
        </div>
      </div>

      {/* Adjust the margin and width for SavedStatus */}
      <div style={{ margin: "20px 0", width: '80%' }}>
        <SavedStatus savedStatus={myInfo.savedStatus} />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "../../Styles/suggestion.css";
import SuggestionData from "../../data/suggestions";

const Suggestion = () => {
  return (
    <div style={{ width: "15vw" }}>
      {SuggestionData.map((user, index) => (
        <div
          key={index} // Added a unique key for each mapped element
          className="suggestion-container" // Use a CSS class for styling
        >
          <div
            style={{
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span>{user.username}</span>
            <img
              src={user.profilePic}
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
              alt={`Profile of ${user.username}`}
            />
          </div>

          <span className="followLink"> Follow </span>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;

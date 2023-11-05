import React from "react";
import { obj as statusObj } from "../../data/statusData";
import "../../Styles/status.css";

const Status = () => {
    return (
        <div className="statusContainer">
            {statusObj.map((obj) => {
                return (
                    <div style = {{display : "flex",
                     flexDirection : "column", gap : "10px", 
                     alignItems : "center"
                     }}>
                        <img style={{ border:"3px solid rgba(17, 224, 96, 0.777)" ,borderRadius : "50%"}} width="50px" height= "50px" src= {obj.profilePic} alt="profilepic" />
                        <span>{obj.username}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Status;

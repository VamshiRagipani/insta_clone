import React from "react";
import "../../Styles/sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebarCont'>
            <ul>
                <li style={{marginBottom:"15px"}}>
                    <img
                        width="100px"
                        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
                        alt="Instagram Logo"
                    />
                </li>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notifications</li>
                <li>Create</li>
                <li>Profile</li>
            </ul>
        </div>
    );
}

export default Sidebar;

import React from "react";
import Sidebar from "../common/Sidebar";
import Main from "./Main";
import Suggestion from "./Suggestion";

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Suggestion />
      </div>
    </div>
  );
};

export default Home;

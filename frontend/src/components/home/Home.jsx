import React from "react"
import Sidebar from "../common/Sidebar";
import Main from "./Main"
const Home = () =>{
    return(
        <div style = {{display : 'flex'}}>
            <div>
            <Sidebar/>
            </div>

            <div>
            <Main/>
            </div>

        </div>
    )
}

export default Home;
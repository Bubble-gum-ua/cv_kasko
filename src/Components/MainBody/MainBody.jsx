import React from "react"
import {AboutMe} from "./AboutMe/AboutMe";
import Me from "../Assets/Me.png"

const MainBody = () => {
    return (
        <div>
            <h4> Welcome to my CV-Page</h4>

            <div>
                <h1> Yurii Kasko</h1>
                <h3> Junior front-end developer</h3>
                <img src={Me} alt="me"/>
            </div>
            <div>
                <AboutMe/>
            </div>
        </div>
    )
}

export default MainBody;
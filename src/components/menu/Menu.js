import React from "react";
import { Link } from 'react-router-dom';
import "./menustyles.css";
function Menu (props){
    return(
        <>
        <body>
        <input type="checkbox" id="menu-toggle"/>
        <label for="menu-toggle"></label>
        <ul id="menu">
            <li><a href="/index">Home</a></li>
            <li><a href="/libraries">Libraries</a></li>
            <li><a href="/">Job Posting</a></li>
            <li><a href="/">Startup 101</a></li>
            <li><a href="/">My Profile</a></li>
        </ul>
</body>
        </>
    );
}
export default Menu;
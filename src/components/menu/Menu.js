import React from "react";
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
            <li><a href="/jobs">Job Posting</a></li>
            <li><a href="/startup">Startup 101</a></li>
            <li><a href="/">Profiles</a></li>
        </ul>
</body>
        </>
    );
}
export default Menu;
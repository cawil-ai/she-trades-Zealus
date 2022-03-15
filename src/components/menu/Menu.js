import React from "react";
import "./menustyles.css";
function Menu (props){
    return(
        <>
        <body>
        <input type="checkbox" id="menu-toggle"/>
        <label for="menu-toggle"></label>
        <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
</body>
        </>
    );
}
export default Menu;
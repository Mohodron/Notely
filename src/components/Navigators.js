import React from "react";

const Navigators = () => {
    return (
        <div className="header-text">
        <ul>
            <li><a href="/all" className="all navigator-text">ALL</a></li>
            <li><a href="/business" className="business navigator-text">BUSINESS</a></li>
            <li><a href="/home" className="home navigator-text">HOME</a></li>
            <li><a href="/personal" className="personal navigator-text">PERSONAL</a></li>
        </ul>
        </div>
    );
}

export default Navigators;
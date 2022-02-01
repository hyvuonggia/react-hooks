import React from "react";

const Navbar = () => {
    const style = {
        background: "rgba(240, 240, 240)",
        color: "black",
    };

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    );
};

export default Navbar;

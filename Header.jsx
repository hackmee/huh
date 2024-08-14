import React from "react";

function Header() {

    return (
        <nav className="navbar">
            <div className="header">
                <div className="logo">
                    <img src="logo.jpg" />
                </div>
                <div className="uper-text">Rajiv Gandhi Cancer Institute & <br />Research Center</div>
            </div>
            <div className="nav-right navbar">
                <p> <i class="fa fa-envelope" style={{ fontSize: "20px", color: "red" }}></i><a href="emailto:info@rgcirc.org">info@rgcirc.org</a></p>
                <p><i class="fa fa-phone" style={{ fontSize: "20px" }}></i>+91 9319089903</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
                

            </div>

        </nav>
    );
}

export default Header;
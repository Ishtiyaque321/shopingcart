import React from "react";
import { Link } from "react-router-dom";
import "../styles/hotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
    return (
        <div className="hotAccessoriesMenu">
            <Link className="hotAccessoriesLink" to="/music">
                Music Store
            </Link>
            <Link className="hotAccessoriesLink" to="/smartDevices">
                Smart Device
            </Link>
            <Link className="hotAccessoriesLink" to="/home">
                Home
            </Link>
            <Link className="hotAccessoriesLink" to="/LifeStyle">
                LifeStyle
            </Link>
            <Link className="hotAccessoriesLink" to="/MobileAccessories">
                Mobile Accessories
            </Link>
        </div>
    );
};

export default HotAccessoriesMenu;

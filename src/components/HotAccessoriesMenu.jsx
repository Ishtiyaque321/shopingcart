import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hotAccessoriesMenu.css";
import { hotAccessories } from "../data/data";

const tabData = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Music Store",
        value: "music",
    },
    {
        label: "Smart Device",
        value: "smartDevice",
    },
    {
        label: "Home",
        value: "home",
    },
    {
        label: "LifeStyle",
        value: "lifeStyle",
    },
    {
        label: "Mobile Accessories",
        value: "mobileAccessories",
    },
];

const hotAccessoriesKeys = Object.keys(hotAccessories);
const hotAccessoriesValue = Object.values(hotAccessories);
console.log("hotAccessoriesKeys:", hotAccessoriesValue);

const getActiveTabValue = (label) => {
    // let a = tabData.find((item) => item.label === label);

    // let b = a.value;
    // return b;

    return tabData.find((item) => item.label === label).value;
};

const HotAccessoriesMenu = () => {
    console.log(hotAccessories);

    const [activeTab, setActiveTab] = useState("Music Store");
    return (
        <div>
            <div className="hotAccessoriesMenu">
                {tabData.map((tab) => {
                    return (
                        <div
                            className={`hotAccessoriesLink ${
                                activeTab === tab.label ? "activeTab" : ""
                            }`}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </div>
                    );
                })}
            </div>
            <div className="HotItemCardContainer">
                {activeTab != "All"
                    ? hotAccessories[getActiveTabValue(activeTab)].map(
                          (item) => {
                              return (
                                  <div className="HotItemCard">
                                      <div>{item.name}</div>
                                      <img src={item.image} alt="image" />
                                      <span>{item.price}</span>
                                  </div>
                              );
                          }
                      )
                    : hotAccessoriesValue.flat(1).map((i) => {
                          return (
                              <div className="HotItemCard">
                                  <div>{i.name}</div>
                                  <img src={i.image} alt="image" />
                                  <span>{i.price}</span>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default HotAccessoriesMenu;

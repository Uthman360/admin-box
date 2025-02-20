import React from "react";

const TabList = ({ activeTab, handleTabClick }) => {
  const tabs = [
    "Terms & Conditions",
    "Privacy Policy",
    "FAQ",
    "Interests",
    "Message Board Topics",
    "Community",
  ];

  return (
    <ul>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
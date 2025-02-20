"use client";
import React from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import "./helper.css";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current path
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/users" },
    { name: "Coaches", path: "/coaches" },
    { name: "Sub Admins", path: "/sub-admins" },
    { name: "Guidelines", path: "/guidelines" },
    { name: "Push Notifications", path: "/push-notifications" },
    { name: "Support", path: "/support" }
  ];

  return (
    <div className='left_dash'>
      <ul>
        {menuItems.map((item, index) => (
         <Link href={item.path} key={index}>  <li  className={pathname === item.path ? "active" : ""}>
           {item.name}
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

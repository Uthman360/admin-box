import React from "react";
import "./dashboard.css";
import Link from "next/link";
import Sidebar from "../helpers/Sidebar";
const Dashboard = () => {
  return (
    <div className='row'>
      <Sidebar />
      <div className='right_dash col'>
        <div className='dash_head'>
          <h1>Dashboard</h1>
          <h3>Users</h3>
        </div>
        <div className='dash dash1'>
          <div className='dash_box'>
            <h2>22K</h2>
            <h4>Total Downloads</h4>
          </div>
          <div className='dash_box'>
            <h2>900</h2>
            <h4>Current Online</h4>
          </div>
          <div className='dash_box'>
            <h2>1.2K</h2>
            <h4>Total Transactions</h4>
          </div>
        </div>
        <div className='dash_head'>
          <h3>Genders</h3>
        </div>
        <div className='dash dash2'>
          <div className='dash_box'>
            <h2>1.2K</h2>
            <h4>Total Male</h4>
          </div>
          <div className='dash_box'>
            <h2>1.2K</h2>
            <h4>Total Female</h4>
          </div>
        </div>
        <div className='dash_head'>
          <h3>Subscriptions</h3>
        </div>
        <div className='dash dash3'>
          <div className='dash_box'>
            <h2>2.3K</h2>
            <h4>Total 1 Day Premium</h4>
          </div>
          <div className='dash_box'>
            <h2>901</h2>
            <h4>Total 3 Day Premium</h4>
          </div>
          <div className='dash_box'>
            <h2>22K</h2>
            <h4>Total 3 Week Premium</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

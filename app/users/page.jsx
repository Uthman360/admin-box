import React from "react";
import Sidebar from "../helpers/Sidebar";
import Image from "next/image";
import "./users.css";
import Table from "../components/Tables/Table";
import Pagination from "../components/Pagination/Pagination";
const Users = () => {
  return (
    <div className='row'>
      <Sidebar />
      <div className='right_dash col'>
        <div className='coaches_heading'>
          {" "}
          <h2>Users</h2>
        </div>
        <div className='head_co'>
          <div className='coaches_head'>
            <div className='co'>
              <button className='filter'>
                <Image
                  width={15}
                  height={100}
                  src='/icons/Filter.png'
                  alt='Filter'
                />{" "}
                Filters
              </button>
            </div>
            <div className='co'>
              <div className='search'>
                <Image
                  width={65}
                  height={80}
                  src='/icons/Search.png'
                  alt='Search'
                />
                <input type='text' placeholder='Search' />
              </div>
            </div>
          </div>
          <div className='coaches_head' style={{ width: "342px" }}>
            <div className='co'></div>
            <div className='co'>
              <button className='download' style={{ width: "170px" }}>
                <Image width={15} height={100} src='/icons/csv.png' alt='csv' />{" "}
                Download CSV
              </button>
            </div>
          </div>
        </div>
        <Table Interest={true} />
        <Pagination />
      </div>
    </div>
  );
};

export default Users;

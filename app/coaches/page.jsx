"use client";
import React, { useState } from "react";
import "./coaches.css";
import Sidebar from "../helpers/Sidebar";
import Table from "../components/Tables/Table";
import Popup from "../components/popup/Popup";
import Image from "next/image";
import Pagination from "../components/Pagination/Pagination";

const Coaches = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='row'>
      <Sidebar />
      <div className='right_dash col'>
        <div className='coaches_heading'>
          <h2>Coaches</h2>
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
            <div className='co'>
              <button className='trainer' onClick={() => setShowPopup(true)}>
                <Image
                  width={15}
                  height={100}
                  src='/images/plus-circle.png'
                  alt='trainer'
                />{" "}
                Add Trainer
              </button>
            </div>

            <div className='co'>
              <button className='download' style={{ width: "170px" }}>
                <Image width={15} height={100} src='/icons/csv.png' alt='csv' />{" "}
                Download CSV
              </button>
            </div>
          </div>
        </div>
        <Table />
        <Pagination />
      </div>

      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default Coaches;

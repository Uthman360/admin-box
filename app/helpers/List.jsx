"use client";
import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ListItems = () => {
  const [items, setItems] = useState([
    "Body composition",
    "Agility",
    "Power",
    "Muscular Fitness",
    "Coordination",
    "Cardio",
    "Balance",
    "Flexibility",
  ]);



  return (
    <div className="mt-16">
      <div className='coaches_heading '>
        <h2>List</h2>
      </div>{" "}
      <div className='flex flex-wrap gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className='relative flex items-center bg-[#333] px-8 py-4 rounded-md shadow-md'
          >
            <span className='text-sm'>{item}</span>
            <button
              className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
            >
              <IoCloseOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;

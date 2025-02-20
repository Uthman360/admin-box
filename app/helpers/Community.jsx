"use client";
import React from "react";

import Image from "next/image";

const communities = [
  { name: "Nutrition Tips", members: "1.9k", img: "/images/nutrition.png" },
  { name: "Weight Lifting", members: "1.5k", img: "/images/weightlifting.png" },
  { name: "Spin", members: "566", img: "/images/spin.png" },
  { name: "Body Building", members: "234", img: "/images/bodybuilding.png" },
];

const Community = () => {
  return (
    <div>
      <div className='flex justify-between mt-[60px]'>
        <div>
          {communities.map((community, index) => (
            <div
              key={index}
              className='flex items-center gap-4 mb-4 rounded-md w-[300px]'
            >
              <img
                src={community.img}
                alt={community.name}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <p className='font-medium'>{community.name}</p>
                <p className='text-gray-400 text-sm'>
                  {community.members} Members
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {communities.map((_, index) => (
            <div key={index} className='flex gap-4 mb-8'>
              <button className='p-2 rounded-full border border-[#24a5cc] text-blue-500  hover:text-white'>
                <Image
                  src={"/icons/pencil.png"}
                  width={20}
                  height={20}
                  alt='pencil'
                />
              </button>
              <button className='p-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>
                <Image
                  src={"/icons/Delete.png"}
                  width={20}
                  height={20}
                  alt='Delete'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

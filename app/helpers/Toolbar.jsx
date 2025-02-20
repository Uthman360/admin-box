import React from "react";
import {
  FaItalic,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaLink,
} from "react-icons/fa";
import Image from "next/image";

const Toolbar = () => {
  return (
    <div className="flex items-center gap-3 px-2 py-2" style={{borderTop:"1px solid #fff"}}>
      {/* "T" Button */}
      <button className="text-[#0099FF] bg-[#24a5cc] text-lg font-medium px-3 py-3 border border-gray-500 rounded-md flex items-center gap-2">
        <span className="text-xl">
          <Image
            src={"/icons/T.png"}
            width={20}
            height={20}
            alt="T"
            className="w-[36px]"
          />
        </span>
      </button>
      <div className="border-r border-gray-600 h-5 mx-2"></div>

      {/* Toolbar Buttons */}
      <div className="flex items-center text-gray-400 gap-3">
        <Image
          src="/icons/bold.png"
          className="cursor-pointer"
          width={12}
          height={80}
          alt="bold"
        />
        <FaItalic className="cursor-pointer text-white" />
        <Image
          src="/icons/underline.png"
          className="cursor-pointer"
          width={12}
          height={80}
          alt="italic"
        />
        <div className="border-r border-gray-600 h-5 mx-2"></div>
        <FaListUl className="cursor-pointer text-white" />
        <FaListOl className="cursor-pointer text-white" />
        <FaAlignLeft className="cursor-pointer text-white" />
        <div className="border-r border-gray-600 h-5 mx-2"></div>
      </div>

      {/* Extra Icons */}
      <div className="flex items-center justify-end w-[100%]">
        <FaLink className="cursor-pointer text-white" />
        <div className="border-r border-gray-600 h-5 mx-2"></div>
        <Image
          src="/icons/Vector.png"
          className="cursor-pointer"
          width={15}
          height={100}
          alt="Undo"
        />
      </div>

    
    </div>
  );
};

export default Toolbar;
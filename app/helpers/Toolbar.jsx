import React, {  useState } from "react";
import {
  FaItalic,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaLink,
  FaBold,
  FaUnderline,
} from "react-icons/fa";
import Image from "next/image";

const TextEditor = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  // Handle text formatting
  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  // Handle link insertion
  const handleInsertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      handleFormat("createLink", url);
    }
  };


  return (
    <div
      className='w-full max-w-3xl mx-auto text-white  overflow-hidden '
      style={{ borderTop: "1px solid #fff" }}
    >
      {/* Toolbar */}
      <div className='flex items-center py-2 '>
        {/* "T" Button */}
        <button
          className='text-[#0099FF] bg-[#24a5cc] text-lg font-medium px-2 py-2  rounded-md flex items-center gap-2'
          onClick={() => handleFormat("fontSize", "7")} // Example: Set font size
        >
          <span className='text-xl'>
            <Image
              src={"/icons/T.png"}
              width={20}
              height={20}
              alt='T'
              className='w-[36px]'
            />
          </span>
        </button>
        <div className='border-r border-gray-600 h-5 mx-2'></div>

        {/* Text Formatting Buttons */}
        <div className='flex items-center text-gray-400 m-[-9px]'>
          <button onClick={() => handleFormat("bold")}>
            <FaBold className='cursor-pointer text-white' />
          </button>
          <button onClick={() => handleFormat("italic")}>
            <FaItalic className='cursor-pointer text-white' />
          </button>
          <button onClick={() => handleFormat("underline")}>
            <FaUnderline className='cursor-pointer text-white' />
          </button>
          <div className='border-r border-gray-600 h-5 mx-2'></div>
          <button onClick={() => handleFormat("insertUnorderedList")}>
            <FaListUl className='cursor-pointer text-white' />
          </button>
          <button onClick={() => handleFormat("insertOrderedList")}>
            <FaListOl className='cursor-pointer text-white' />
          </button>
          <button onClick={() => handleFormat("justifyLeft")}>
            <FaAlignLeft className='cursor-pointer text-white' />
          </button>
          <div className='border-r border-gray-600 h-5 mx-2'></div>
        </div>

        {/* Link and Undo Buttons */}
        <div className='flex items-center justify-end w-[100%]'>
          <button onClick={handleInsertLink}>
            <FaLink className='cursor-pointer text-white' />
          </button>
          <div className='border-r border-gray-600 h-5 mx-2'></div>
          <button onClick={() => handleFormat("undo")}>
            <Image
              src='/icons/Vector.png'
              className='cursor-pointer'
              width={15}
              height={100}
              alt='Undo'
            />
          </button>
        </div>
      </div>

      {/* Text Editor Area */}
    </div>
  );
};

export default TextEditor;

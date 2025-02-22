"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="input_box mb-[30px] mt-[20px] relative">
      <h2 className="text-[20px] mb-[15px]">Upload Image</h2>
      <label htmlFor="file-upload" className="cursor-pointer">
        <div
          className={`relative w-[434px] h-[180px] ${
            !image ? "border-2 border-dashed border-spacing" : ""
          } bg-[#363738] rounded-lg flex flex-col items-center justify-center`}
        >
          {image ? (
            <>
              <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
              <button
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={handleRemoveImage}
              >
                <IoCloseOutline />
              </button>
            </>
          ) : (
            <>
              <Image src="/images/upload.png" width={30} height={20} alt="upload" />
              <p className="text-gray-400 text-sm mt-2">Upload</p>
            </>
          )}
        </div>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUpload;

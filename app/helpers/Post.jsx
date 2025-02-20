import Image from "next/image";
import React, { useState, useRef } from "react";
import Confirm from "../components/Confirm/Confirm";
import { IoCloseOutline } from "react-icons/io5";

const Post = ({ showPopup, setShowPopup, step, setStep }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // File input ka reference

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
      fileInputRef.current.value = ""; // Input field reset karna
    }
  };

  return (
    <div className='post max-w-2xl min-h-screen mx-auto text-white'>
      <div className='coaches_heading'>
        <h2>Post</h2>
      </div>

      {/* Confirm Component Sirf Step 1 Ya Step 2 Pe Show Ho Ga */}
      {showPopup && (step === 1 || step === 2) && (
        <div className='modal-overlay'>
          {step === 1 && (
            <Confirm
              title='Inform them'
              desc='Are you sure you want to delete this Trainer?'
              closePopup={() => setShowPopup(false)}
              onClick={() => setStep(2)}
              istrue={true}
            />
          )}
          {step === 2 && (
            <Confirm
              title={`You have added a Post`}
              closePopup={() => setShowPopup(false)}
            />
          )}
        </div>
      )}

      <div className='input_box'>
        <h2 className='text-[20px] mb-[15px]'>Topic Description</h2>
        <textarea
          type='text'
          placeholder='Description Here'
          className='!w-[434px] !h-[180px]'
        />
      </div>

      <div className='input_box mb-[30px] mt-[20px] relative'>
        <h2 className='text-[20px] mb-[15px]'>Upload Image</h2>
        <label htmlFor='file-upload' className='cursor-pointer'>
          <div
            className={`relative w-[434px] h-[180px] ${
              !image ? "border-2 border-dashed border-spacing" : ""
            } bg-[#363738] rounded-lg flex flex-col items-center justify-center`}
          >
            {image ? (
              <>
                {/* Uploaded Image */}
                <img
                  src={image}
                  alt='Uploaded'
                  className='w-full h-full object-cover rounded-lg'
                />
                {/* Cut Button (X) */}
                <button
                  className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
                  onClick={handleRemoveImage}
                >
                  <IoCloseOutline />
                </button>
              </>
            ) : (
              <>
                <Image
                  src='/images/upload.png'
                  width={30}
                  height={20}
                  alt='upload'
                />
                <p className='text-gray-400 text-sm mt-2'>Upload</p>
              </>
            )}
          </div>
        </label>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          className='hidden'
          ref={fileInputRef} // Ref set kar raha hai
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default Post;

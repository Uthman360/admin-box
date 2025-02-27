"use client";
import React, { useState, useEffect, useRef } from "react"; // useEffect import karein
import Sidebar from "../helpers/Sidebar";
import Button from "../helpers/Button";
import Toolbar from "../helpers/Toolbar";
import TabList from "../helpers/TabList";
import TextArea from "../helpers/TextArea";
import "./guidelines.css";
import FAQSection from "../helpers/FAQ";
import PostCom from "../helpers/Post";
import Confirm from "../components/server/Confirm/Confirm";
import ListItems from "../helpers/List";
import Community from "../helpers/Community";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Guidelines = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [Post, setPost] = useState(false);
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);
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
      fileInputRef.current.value = ""; // Input field reset karna
    }
  };

  const [activeTab, setActiveTab] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("activeTab") || "Terms & Conditions"
      : "Terms & Conditions"
  );

  const [texts, setTexts] = useState({
    "Terms & Conditions":
      "Welcome to FitCircle!   <br /><br />\n\nThese terms and conditions outline the rules and regulations for the use of FitCircle’s Website... <br /><br /> Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit.",
    "Privacy Policy":
      "Your privacy is important to us. <br /> <br /> This privacy policy explains how we collect, use, and safeguard your information... <br /> <br /> We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", tab); // Save active tab
    }
  };


  useEffect(() => {
    setShowPopup(false);
  }, [activeTab]);

  return (
    <div className='row'>
      <Sidebar />
      <div className='guide'>
        <div className='row'>
          <div className='guide_left'>
            <div className='coaches_heading'>
              <h2>Guidelines</h2>
            </div>
            <div className='guide_dash'>
              <TabList activeTab={activeTab} handleTabClick={handleTabClick} />
            </div>
          </div>
          <div className='guide_right'>
            <div>
              <div
                className='terms'
                style={{
                  backgroundColor: [
                    "Terms & Conditions",
                    "Privacy Policy",
                    "FAQ",
                  ].includes(activeTab)
                    ? " #363738"
                    : "transparent",
                }}
              >
                <div className='handler_btn'>
                  <Button
                    name={"Cancel"}
                    istrue={true}
                    width={100}
                    height={40}
                  />
                  <div onClick={() => setShowPopup(true)}>
                    {" "}
                    <Button name={"Save"} width={100} height={40} />
                  </div>
                </div>
                {["Terms & Conditions", "Privacy Policy", "FAQ"].includes(
                  activeTab
                ) && <Toolbar />}
              </div>

              {["Terms & Conditions", "Privacy Policy"].includes(activeTab) && (
                <div className='termsCondition'>
                  <div className='bg-[#363738] text-white p-4 rounded-[5px] m-[30px]'>
                    <h2 className='text-lg font-semibold mb-2'>{activeTab}</h2>
                    <TextArea
                      value={texts[activeTab]}
                    />
                  </div>
                  {showPopup && (
                    <div className='modal-overlay'>
                      <Confirm
                        title={`You have added a ${activeTab}`}
                        closePopup={() => setShowPopup(false)}
                      />
                    </div>
                  )}
                </div>
              )}
              {activeTab === "FAQ" && (
                <div className='faqs'>
                  <FAQSection />
                  {showPopup && (
                    <div className='modal-overlay'>
                      <Confirm
                        title={`You have added a ${activeTab}`}
                        closePopup={() => setShowPopup(false)}
                      />
                    </div>
                  )}
                </div>
              )}

              {activeTab === "Interests" && (
                <div className='interests h-[100vh] max-w-2xl mx-auto   text-white '>
                  <div className='coaches_heading '>
                    <h2>Interests</h2>
                  </div>
                  <div className='input_box'>
                    <input type='text' placeholder='Type here...' />
                  </div>
                  <div style={{ textAlign: "end" }}>
                    {" "}
                    <Button
                      name={"Add Sub Category"}
                      width={"260"}
                      height={"50"}
                      radius={"50"}
                    />
                  </div>
                  <ListItems />
                </div>
              )}

              {activeTab === "Message Board Topics" && (
                <div className='board_topic max-w-2xl mx-auto   text-white'>
                  <div className='coaches_heading '>
                    <h2>Message Board Topics</h2>
                  </div>

                  <div className='input_box mt-[30px] mb-[20px]'>
                    <h2 className='text-[20px] mb-[15px]'>Topic title</h2>
                    <input
                      type='text'
                      placeholder='Topic Here'
                      className='!w-[434px] !h-[66px]'
                    />
                  </div>

                  <div className='input_box'>
                    <h2 className='text-[20px] mb-[15px]'>Topic Description</h2>
                    <textarea
                      type='text'
                      placeholder='Description Here'
                      className='!w-[434px] !h-[150px]'
                    />
                  </div>
                  <div className='input_box mb-[30px] mt-[20px] relative'>
                    <h2 className='text-[20px] mb-[15px]'>Upload Image</h2>
                    <label htmlFor='file-upload' className='cursor-pointer'>
                      <div
                        className={`relative w-[434px] h-[180px]
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
                  {showPopup && (
                    <div className='modal-overlay'>
                      <Confirm
                        title={`You have added a ${activeTab}`}
                        closePopup={() => setShowPopup(false)}
                      />
                    </div>
                  )}
                </div>
              )}
              {activeTab === "Community" &&
                (Post ? (
                  <PostCom
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    setStep={setStep}
                    step={step}
                  />
                ) : (
                  <div className='community max-w-2xl min-h-screen mx-auto text-white'>
                    <div className='coaches_heading'>
                      <h2>Community</h2>
                    </div>
                    <div className='flex gap-4 justify-between mb-6'>
                      <div
                        onClick={() => {
                          setPost(true);
                          setShowPopup(false);
                        }}
                      >
                        <Button
                          name='Post'
                          width='150'
                          height='45'
                          radius='50'
                        />
                      </div>
                      <Button
                        name='Add Community'
                        width='200'
                        height='45'
                        radius='50'
                      />
                    </div>
                    <Community />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
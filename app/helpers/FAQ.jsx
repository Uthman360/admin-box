"use client";
import React, { useState } from "react";
import Button from "./Button";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      answer:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit.",
    },
    {
      answer:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit.",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newFaq, setNewFaq] = useState({ answer: "" });

  const handleAddMoreClick = () => {
    setIsAdding(true);
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-[#2E2F30] text-white  rounded-[5px] m-[30px]'>
      {/* FAQs list */}
      {/* Textarea should appear AFTER all FAQs */}
      {isAdding && (
        <div className='mt-4 p-4 bg-[#363738] rounded-md'>
          <textarea
            className='w-full p-2 bg-[#363738] text-white rounded-md outline-none'
            rows='6'
            placeholder='Enter Answer'
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ answer: e.target.value })}
          />
        </div>
      )}
      {faqs.map((faq, index) => (
        <div key={index} className='mt-4 p-4 h-[180px] bg-[#363738] rounded-md'>
          <p className='text-[15px] mt-2'  style={{lineHeight:"28px"}}>{faq.answer}</p>
        </div>
      ))}

      {!isAdding && <div style={{textAlign:"end"}} onClick={handleAddMoreClick}><Button name={"Add More"} height='45' width="150" radius='50' /></div>}
    </div>
  );
};

export default FAQSection;

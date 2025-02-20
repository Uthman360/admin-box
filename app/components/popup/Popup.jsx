"use client";
import React, { useState } from "react";
import "./popup.css";
import Button from "@/app/helpers/Button";
import AddTrainer from "../AddTrainer/AddTrainer";
import Confirm from "../Confirm/Confirm";
import Image from "next/image";

const options = [
  "Body Builder Coach",
  "Strength and Conditioning Coach",
  "Professional Coach",
  "Yoga Instructor",
  "Nutritionist",
  "Influencer",
];

const Popup = ({ closePopup }) => {
  const [checkedItems, setCheckedItems] = useState([
    "Body Builder Coach",
    "Strength and Conditioning Coach",
  ]);
  const [step, setStep] = useState(1);

  const handleCheckboxChange = (option) => {
    setCheckedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className='step'>
      {step === 1 && (
        <div className='modal-overlay'>
          <div className='modal'>
            <div className='modal-header'>
              <h2>Add Trainer</h2>
              <button className='close-btn' title='Close' onClick={closePopup}>
                &times;
              </button>
            </div>

            <div className='modal-body'>
              {options.map((option) => (
                <label key={option} className='checkbox-label'>
                  <input
                    type='checkbox'
                    checked={checkedItems.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {checkedItems.includes(option) && (
                    <Image src="/images/Icon.png" width={100} height={100} alt="Check" />
                  )}
                  {option}
                </label>
              ))}
            </div>

            <div className='modal-footer'>
              <div onClick={() => setStep(2)}>
                <Button name='Next' height='45' radius='50' />
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <AddTrainer closePopup={closePopup} onClick={() => setStep(3)} />
      )}

      {step === 3 && <Confirm title="You sent an email to the trainer!" closePopup={closePopup} />}
    </div>
  );
};

export default Popup;

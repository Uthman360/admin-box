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
  const [checkedItems, setCheckedItems] = useState(new Set([
    "Body Builder Coach",
    "Strength and Conditioning Coach",
  ]));
  const [step, setStep] = useState(1);

  const handleCheckboxChange = (option) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      newChecked.has(option) ? newChecked.delete(option) : newChecked.add(option);
      return newChecked;
    });
  };

  return (
    <div className="step">
      {step === 1 && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add Trainer</h2>
              <button className="close-btn" title="Close" onClick={closePopup}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              {options.map((option) => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {checkedItems.has(option) && (
                    <Image src="/images/Icon.png" width={24} height={24} alt="Check" />
                  )}
                  {option}
                </label>
              ))}
            </div>

            <div className="modal-footer">
              <button onClick={() => setStep(2)}>
                <Button name="Next" height="45" radius="50" />
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && <AddTrainer closePopup={closePopup} onClick={() => setStep(3)} />}
      {step === 3 && <Confirm title="You sent an email to the trainer!" closePopup={closePopup} />}
    </div>
  );
};

export default Popup;

import Button from "@/app/helpers/Button";
import React from "react";

const AddTrainer = ({ closePopup,onClick }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <h2>Add Trainer</h2>
          <button className='close-btn' title='Close' onClick={closePopup}>
            &times;
          </button>
        </div>
        <h4>
          Note: You are required to give a temporary password to your Trainer
        </h4>
        <div className='modal-body' style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}> 
          <div className='input_box'>
            <input type='text' placeholder='Full name' />
          </div>
          <div className='input_box'>
            <input type='text' placeholder='Last name' />
          </div>
          <div className='input_box'>
            <input type='text' placeholder='Email' />
          </div>
          <div className='input_box'>
            <input type='number' placeholder='Phone number' />
          </div>
          <div className='input_box'>
            <input type='text' placeholder='Temporary Password: ABC123' />
          </div>
        </div>
        <div className='modal-footer'>
        <div onClick={onClick}><Button name={"Send to email"} height="45" radius="50" /></div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainer;

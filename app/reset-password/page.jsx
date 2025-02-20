import React from "react";
import "./reset-pass.css";
import FormWrapper from "../helpers/FormWrapper";
import Button from "../helpers/Button";
import FormBox from "../helpers/FormBox";
import { LiaLockSolid } from "react-icons/lia";
import Image from "next/image";
const ResetPassword = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
        <Image width={100} height={100} src='/images/logo.png' alt='Background Image' />
        </div>
      </div>
      <div className='right_side col'>
        <h3>Reset password</h3>
        <FormBox>
          <div className='input_box'>
            <h4>Create new password?</h4>

            <div className='in_box'>
              <LiaLockSolid width={30} height={30} color='#c4c4c4' />
              <input type='text' placeholder='Password' />
            </div>
            <div className='in_box'>
              <LiaLockSolid width={30} height={30} color='#c4c4c4' />
              <input type='text' placeholder='Confirm Password' />
            </div>
            <div style={{marginTop:"10px"}}>
            <Button name='Submit' width='350' />  
            </div>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default ResetPassword;

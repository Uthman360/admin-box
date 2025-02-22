import React from "react";
import "./verify.css";
import FormWrapper from "../helpers/FormWrapper";
import Button from "../helpers/Button";
import FormBox from "../helpers/FormBox";
import Link from "next/link";
import Image from "next/image";
const VerifyCode = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
          <Image width={150} height={150} src='/images/logo.png' alt='Logo' />
        </div>
      </div>
      <div className='right_side col'>
        <h3>Let’s Verify You</h3>
        <FormBox>
          <div className='input_box'>
            <h4>Enter the 5-digit code we’ve sent to your email </h4>
            <div className='code_box'>
              {[...Array(5)].map((_, index) => (
                <div className='in_code_box' key={index}>
                  <input
                    type='text'
                    inputMode='numeric'
                    pattern='\d*'
                    maxLength={1}
                    className='code_input'
                    placeholder='0'
                    style={{
                      width: "59px",
                      height: "57px",
                      borderRadius: "12px",
                      textAlign: "center",
                    }}
                  />
                </div>
              ))}
            </div>
            <Link href={"/reset-password"}>
              {" "}
              <Button name='Verify' width='380' />
            </Link>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default VerifyCode;

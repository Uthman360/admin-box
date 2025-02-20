import React from "react";
import "./forgetpass.css";
import FormWrapper from "../helpers/FormWrapper";
import Button from "../helpers/Button";
import FormBox from "../helpers/FormBox";
import Link from "next/link";
import Image from "next/image";
const ForgetPassword = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
          <Image width={100} height={100} src='/images/logo.png' alt='Background Image' />
        </div>
      </div>
      <div className='right_side col'>
        <h3>Forgot your password?</h3>
        <FormBox>
          <div className='input_box'>
            <h4>Enter your email address so we can send you a verification code</h4>
            <div className='in_box'>
            <Image width={100} height={100} src='/icons/email.png' alt='email' />
              <input type='text' placeholder='Email' />
            </div>

           <Link href={'/verify'}> <Button name='Submit' width='350' /></Link>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default ForgetPassword;

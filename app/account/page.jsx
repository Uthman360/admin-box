import React from "react";
import "./account.css";
import { LiaLockSolid } from "react-icons/lia";
import Button from "../helpers/Button";
import Link from "next/link";
import FormWrapper from "../helpers/FormWrapper";
import FormBox from "../helpers/FormBox";
import Image from "next/image";

const Account = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
          <img src='/images/logo.png' alt='Background Image' />
        </div>
      </div>
      <div className='right_side col'>
        <h3>Create Admin Account</h3>
        <FormBox>
          <div className='input_box'>
            <div className='in_box'>
              <Image width={100} height={100} src='/icons/profile.png' alt='profile' />
              <input type='text' placeholder='Full name' />
            </div>
            <div className='in_box'>
            <Image width={100} height={100} src='/icons/email.png' alt='email' />
              <input type='text' placeholder='Email' />
            </div>
            <div className='in_box'>
            <Image width={100} height={100} src='/icons/phone.png' alt='phone' />
              <input type='text' placeholder='Phone' />
            </div>
            <div className='in_box'>
              <LiaLockSolid width={30} height={30} color='#c4c4c4' />
              <input type='text' placeholder='Password' />
            </div>
            <div className='in_box'>
              <LiaLockSolid width={30} height={30} color='#c4c4c4' />
              <input type='text' placeholder='Confirm Password' />
            </div>
            <Link href={"/success"}>
              {" "}
              <Button name='Create Account' width='350' />
            </Link>
            <h4>
              Already have an account? <Link href={"/login"}>Login</Link>
            </h4>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default Account;

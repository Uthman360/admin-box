import React from "react";
import "./login.css";
import FormWrapper from "../helpers/FormWrapper";
import Button from "../helpers/Button";
import FormBox from "../helpers/FormBox";
import { LiaLockSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
        <Image width={150} height={150} src="/images/logo.png" alt="Logo" />
        </div>
      </div>
      <div className='right_side col'>
        <h3>Sign in to your account</h3>
        <FormBox>
          <div className='input_box'>
            <div className='in_box'>
              <Image width={100} height={100} src='/icons/email.png' alt='email' />
              <input type='text' placeholder='Email' />
            </div>
            <div className='in_box'>
              <LiaLockSolid width={30} height={30} color='#c4c4c4' />
              <input type='text' placeholder='Password' />
            </div>
            <h4 style={{ marginTop: "20px"}}>
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </h4>
            <Link href={"/dashboard"}>
              {" "}
              <Button name='Login' width='350' />
            </Link>
            <h4>
              Don’t have an account?{" "}
              <Link href={"/account"} style={{ borderBottom: "1px solid" }}>
                Create here
              </Link>
            </h4>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default Login;

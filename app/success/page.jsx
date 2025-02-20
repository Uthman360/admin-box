import React from "react";
import "./success.css";
import FormWrapper from "../helpers/FormWrapper";
import Button from "../helpers/Button";
import FormBox from "../helpers/FormBox";
import Link from "next/link";
import Image from "next/image";
const SuccessPage = () => {
  return (
    <FormWrapper>
      <div className='left_side col'>
        {" "}
        <div className='image-section'>
        <Image width={100} height={100} src='/images/logo.png' alt='Background Image' />
        </div>
      </div>
      <div className='right_side col'>
        <FormBox>
          <div className='suc_box'>
          <Image width={100} height={100} src='/icons/success.png' alt='success' />
            <h3>Account has created successful</h3>
            <Link href={'/login'}><Button name={"Login"} width={'350'}></Button>
            </Link>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default SuccessPage;

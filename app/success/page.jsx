import React from "react";
import "./success.css";
import FormWrapper from "../helpers/FormWrapper";
import Image from "next/image";
import LeftSide from "../components/server/LeftSide/LeftSide";
import RightSide from "../components/server/RightSide/RightSide";

const SuccessPage = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        customContent={
          <div className='suc_box'>
            <Image
              width={100}
              height={100}
              src='/icons/success.png'
              alt='success'
            />
            <h3>Account has created successful</h3>
          </div>
        }
        buttonText="Login"
        linkHref="/login"
      />
    </FormWrapper>
  );
};

export default SuccessPage;

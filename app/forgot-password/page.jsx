import React from "react";
import FormWrapper from "../helpers/FormWrapper";
import LeftSide from "../components/server/LeftSide/LeftSide";
import RightSide from "../components/server/RightSide/RightSide";

const ForgetPassword = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        title="Forgot your password?"
        inputs={[
          { type: "text", placeholder: "Email", icon: "/icons/email.png" },
        ]}
        inputtext="Enter your email address so we can send you a verification code"
        buttonText="Submit"
        linkHref="/verify"
      />
    </FormWrapper>
  );
};

export default ForgetPassword;

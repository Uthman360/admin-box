import React from "react";
import FormWrapper from "../helpers/FormWrapper";
import RightSide from "../components/server/RightSide/RightSide";
import LeftSide from "../components/server/LeftSide/LeftSide";

const ResetPassword = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        title="Reset password"
        inputs={[
          { type: "password", placeholder: "New Password", icon: null },
          { type: "password", placeholder: "Confirm Password", icon: null },
        ]}
        buttonText="Submit"
        inputtext="Create new password?"
        linkText=""
        linkHref="#"
      />
    </FormWrapper>
  );
};

export default ResetPassword;

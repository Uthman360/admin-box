import React from "react";
import FormWrapper from "../helpers/FormWrapper";
import LeftSide from "../components/server/LeftSide/LeftSide";
import RightSide from "../components/server/RightSide/RightSide";

const Account = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        title="Create Admin Account"
        inputs={[
          { type: "text", placeholder: "Full name", icon: "/icons/profile.png" },
          { type: "text", placeholder: "Email", icon: "/icons/email.png" },
          { type: "text", placeholder: "Phone", icon: "/icons/phone.png" },
          { type: "password", placeholder: "Password", icon: null },
          { type: "password", placeholder: "Confirm Password", icon: null },
        ]}
        buttonText="Create Account"
        linkText="Already have an account?"
        linkHref="/success"
      />
    </FormWrapper>
  );
};

export default Account;

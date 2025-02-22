import React from "react";
import FormWrapper from "../helpers/FormWrapper";
import LeftSide from "../components/server/LeftSide/LeftSide";
import RightSide from "../components/server/RightSide/RightSide";

const Login = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        title="Sign in to your account"
        inputs={[
          { type: "text", placeholder: "Email", icon: "/icons/email.png" },
          { type: "password", placeholder: "Password", icon: null },
        ]}
        buttonText="Login"
        linkText="Don’t have an account?"
        linkHref="/dashboard"
        forgotLink="/forgot-password"  // Now added
      />
    </FormWrapper>
  );
};

export default Login;

import React from "react";
import "./verify.css";
import FormWrapper from "../helpers/FormWrapper";
import LeftSide from "../components/server/LeftSide/LeftSide";
import RightSide from "../components/server/RightSide/RightSide";

const VerifyCode = () => {
  return (
    <FormWrapper>
      <LeftSide />
      <RightSide
        title="Let’s Verify You"
        buttonText="Verify"
        linkHref="/reset-password"
        customContent={
          <>
            <h4>Enter the 5-digit code we’ve sent to your email </h4>
            <div className="code_box">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={1}
                  className="code_input"
                  placeholder="0"
                  style={{
                    width: "59px",
                    height: "57px",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                />
              ))}
            </div>
          </>
        }
      />
    </FormWrapper>
  );
};

export default VerifyCode;

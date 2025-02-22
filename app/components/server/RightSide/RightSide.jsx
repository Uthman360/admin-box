import React from "react";
import { LiaLockSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import "./rightside.css";
import FormBox from "@/app/helpers/FormBox";
import Button from "@/app/helpers/Button";

const RightSide = ({
  title,
  inputs,
  buttonText,
  linkHref,
  linkText,
  forgotLink,
  inputtext,
  customContent,
}) => {
  return (
    <div className='right_side col'>
      <h3>{title}</h3>
      <FormBox>
        <div className='input_box'>
          {inputtext && <h4>{inputtext}</h4>}
          {inputs &&
            inputs.map(({ type, placeholder, icon }, index) => (
              <div className='in_box' key={index}>
                {icon ? (
                  <Image width={24} height={24} src={icon} alt={placeholder} />
                ) : (
                  <LiaLockSolid size={24} color='#c4c4c4' />
                )}
                <input type={type} placeholder={placeholder} />
              </div>
            ))}
          {forgotLink && (
            <h4 style={{ marginTop: "10px" }}>
              <Link href={forgotLink}>Forgot Password?</Link>
            </h4>
          )}
          {/* Custom Content for VerifyCode */}
          {customContent && (
            <div className='custom_content'>{customContent}</div>
          )}

          <Link href={linkHref}>
            <Button name={buttonText} width='350' />
          </Link>
          {linkText && (
            <h4>
              {linkText} <Link href={linkHref}>Login</Link>
            </h4>
          )}
        </div>
      </FormBox>
    </div>
  );
};

export default RightSide;

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
      <div className="left_side col">
        <div className="image-section">
        <Image width={150} height={150} src="/images/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="right_side col">
        <h3>Create Admin Account</h3>
        <FormBox>
          <div className="input_box">
            {[
              { src: "/icons/profile.png", alt: "Profile", placeholder: "Full name" },
              { src: "/icons/email.png", alt: "Email", placeholder: "Email" },
              { src: "/icons/phone.png", alt: "Phone", placeholder: "Phone" },
            ].map(({ src, alt, placeholder }, index) => (
              <div className="in_box" key={index}>
                <Image width={24} height={24} src={src} alt={alt} />
                <input type="text" placeholder={placeholder} />
              </div>
            ))}

            {["Password", "Confirm Password"].map((placeholder, index) => (
              <div className="in_box" key={index}>
                <LiaLockSolid size={24} color="#c4c4c4" />
                <input type="password" placeholder={placeholder} />
              </div>
            ))}

            <Link href="/success">
              <Button name="Create Account" width={350} />
            </Link>
            <h4>
              Already have an account? <Link href="/login">Login</Link>
            </h4>
          </div>
        </FormBox>
      </div>
    </FormWrapper>
  );
};

export default Account;

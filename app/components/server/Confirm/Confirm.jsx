import React from "react";
import "./confirm.css";
import Button from "@/app/helpers/Button";
import Image from "next/image";
const Confirm = ({ closePopup, title, desc, onClick, istrue }) => {
  return (
    <div className='modal-overlay'>
      <div className='confirm' style={{ padding: istrue ? undefined : "25px" }}>
        {!istrue && (
          <Image
            width={50}
            height={100}
            src='/icons/success.png'
            alt='success'
          />
        )}
        {title ? (
          <h2>{title}</h2>
        ) : (
          <Image
            width={50}
            height={100}
            src='/icons/success.png'
            alt='success'
          />
        )}

        {desc && <p>{desc}</p>}

        {desc ? (
          <div className='dlet_btn'>
            <button style={{ color: "#DC4D4D" }} onClick={closePopup}>
              No
            </button>
            <hr />
            <button style={{ color: "#2080B7" }} onClick={onClick}>
              Yes
            </button>
          </div>
        ) : (
          <div
            onClick={() => {
              closePopup();
            }}
          >
            <Button name={"Confirm"} height='45' radius='50' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirm;

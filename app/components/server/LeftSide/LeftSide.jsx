import React from "react";
import Image from "next/image";
import "./leftside.css";

const LeftSide = () => {
  return (
    <div className="left_side col">
      <div className="image-section">
        <Image width={150} height={150} src="/images/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default LeftSide;

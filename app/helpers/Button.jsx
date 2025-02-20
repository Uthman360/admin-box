import React from "react";
import "./helper.css";

const Button = ({ name, width,height,radius ,istrue}) => {
  return (
    <div>
      <button className='btn' style={{ width: width ? `${width}px` : "250px", height : height ? `${height}px`: "57px", borderRadius:radius? `${radius}px`:"12px",backgroundColor:istrue? "transparent" : "",border:istrue?"2px solid #fff":""}}>
        {name}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import "./helper.css";

const FormWrapper = ({children}) => {
  return (
    <div className='formwrapper'>
       {children}
    </div>
  );
};

export default FormWrapper;

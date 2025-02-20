"use client"
import React, { useEffect, useRef } from "react";

const TextArea = ({ value, onChange }) => {
  const textAreaRef = useRef(null);

  // Set initial value
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = value || "";
    }
  }, [value]);  return (
    <div
      contentEditable={true}
      className='p-4 min-h-[100vh] outline-none'
      ref={textAreaRef}
      placeholder='Start typing here...'
    ></div>
  );
};

export default TextArea;

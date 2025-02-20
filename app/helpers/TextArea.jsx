import React from "react";

const TextArea = ({ value, onChange }) => {
  return (
    <textarea
      className="w-full h-[100vh] bg-transparent text-gray-300 p-2 border-none outline-none resize-none"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
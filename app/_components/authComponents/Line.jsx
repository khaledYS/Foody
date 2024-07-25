import React from "react";
const Line = ({ text }) => {
  return (
    <div
      className="
      text-center relative flex justify-center items-center
      after:content-['']
      after:absolute
      after:-z-[1]
      after:bg-slate-600
      after:w-full
      after:h-[2px]
    "
    >
      <span className="bg-background px-4">{text}</span>
    </div>
  );
};
export default Line;

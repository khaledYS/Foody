import Image from "next/image";
import React from "react";
import googleIcon from "@/public/assets/google-icon.svg";
const GoogleButton = ({ text }) => {
  return (
    <div className="w-full py-4 bg-[#083344] text-white flex justify-center items-center gap-3 rounded-sm">
      <Image
        src={googleIcon}
        alt="googleIcon"
        className="h-8 w-8"
        width={googleIcon.width}
        height={googleIcon.height}
      />
      <span>{text}</span>
    </div>
  );
};
export default GoogleButton;

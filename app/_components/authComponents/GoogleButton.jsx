import Image from "next/image";
import React from "react";
import googleIcon from "@/public/assets/google-icon.svg";
import { Button } from "@/components/ui/button";
const GoogleButton = ({ text }) => {
  return (
    <Button className="w-full h-14 text-base bg-secondary text-white flex justify-center items-center gap-3 rounded-sm">
      <Image
        src={googleIcon}
        alt="googleIcon"
        className="h-8 w-8"
        width={googleIcon.width}
        height={googleIcon.height}
      />
      <span>{text}</span>
    </Button>
  );
};
export default GoogleButton;

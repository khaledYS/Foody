import React from "react";
const AuthTitle = ({ text, fontSize = "1.5rem" }) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="w-full text-center">
      {text}
    </h1>
  );
};
export default AuthTitle;

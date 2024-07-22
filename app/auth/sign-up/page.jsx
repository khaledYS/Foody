import AuthTitle from "@/app/_components/authComponents/AuthTitle";
import GoogleButton from "@/app/_components/authComponents/GoogleButton";
import Line from "@/app/_components/authComponents/Line";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col gap-6 p-6 border-2 h-fit w-full sm:w-[400px]">
      <AuthTitle text={"Sign up for free"} />
      <GoogleButton text={"Login with Google"} />
      <Line text={"Or Sign up with Email"} />
      <form className="flex flex-col gap-4">
        <div className="group grid">
          <label className="group-focus-within:text-primary" htmlFor="username">
            Full Name
          </label>
          <input
            className="border-2 rounded-sm h-11 outline-none focus:border-primary px-2"
            type="text"
            name="username"
            placeholder="Eg. Yasmin Siraj"
          />
        </div>
        <div className="group grid">
          <label className="group-focus-within:text-primary" htmlFor="email">
            Email Address
          </label>
          <input
            className="border-2 rounded-sm h-11 outline-none focus:border-primary px-2"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="group grid">
          <label className="group-focus-within:text-primary" htmlFor="password">
            password
          </label>
          <input
            className="placeholder:absolute placeholder:top-3 border-2 rounded-sm h-11 outline-none focus:border-primary px-2"
            type="password"
            name="password"
            placeholder="**************"
          />
        </div>
        <input
          className="bg-primary text-white rounded-sm h-11 outline-none"
          type="submit"
          value="login"
        />
      </form>
      <div className="text-xs text-center">
        By signing up, you agree with Foody’s{" "}
        <Link href={"/"} className="text-blue-500">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href={"/"} className="text-blue-500">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
};
export default page;

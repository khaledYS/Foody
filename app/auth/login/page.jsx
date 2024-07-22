import AuthTitle from "@/app/_components/authComponents/AuthTitle";
import GoogleButton from "@/app/_components/authComponents/GoogleButton";
import Line from "@/app/_components/authComponents/Line";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col gap-8 p-6 border-2 h-fit w-full sm:w-[400px]">
      <AuthTitle text={"Login to Foody"} />
      <GoogleButton text={"Login with Google"} />
      <Line text={"Or Login with Email"} />
      <form className="flex flex-col gap-4">
        <div className="group grid">
          <label className="group-focus-within:text-[#13B9A8]" htmlFor="email">
            Email Address
          </label>
          <input
            className="border-2 rounded-sm h-11 outline-none focus:border-[#13B9A8] px-2"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="group grid">
          <label
            className="group-focus-within:text-[#13B9A8]"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="placeholder:absolute placeholder:top-3 border-2 rounded-sm h-11 outline-none focus:border-[#13B9A8] px-2"
            type="password"
            name="password"
            placeholder="**************"
          />
        </div>
        <input
          className="bg-[#13B9A8] text-white rounded-sm h-11 outline-none"
          type="submit"
          value="login"
        />
      </form>
      <Link
        href={"/auth/forgot-password"}
        className="text-center text-blue-500"
      >
        Forgot your password?
      </Link>
    </div>
  );
};
export default page;

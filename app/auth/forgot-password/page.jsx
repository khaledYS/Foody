import AuthTitle from "@/app/_components/authComponents/AuthTitle";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col gap-6 p-6 border-2 h-fit w-full sm:w-[400px]">
      <AuthTitle text={"Did you forgot your password?"} fontSize={"1.25rem"} />
      <p className="text-center text-sm text-[#A39F9F]">
        Enter your email address you’re using for your account below and we will
        send you a password reset link
      </p>
      <form className="flex flex-col gap-4">
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
        <input
          className="bg-primary text-white rounded-sm h-11 outline-none"
          type="submit"
          value="reset password"
        />
      </form>
      <Link href={"/auth/login"} className="text-center text-blue-500">
        go back
      </Link>
    </div>
  );
};
export default page;

import React from "react";
import showcaseImg from "@/public/assets/showcase.png"
import Feature from "./Feature";
import { HiOutlineQrcode } from "react-icons/hi";
import { TfiTablet } from "react-icons/tfi";
import { FaComments, FaUserClock } from "react-icons/fa";

const page = () => {
  return(
    <div className="">

      <div className="w-full h-[85vh] grid place-items-center">
        <div className="my-10 flex flex-col justify-center items-center max-w-[40vw] max-md:max-w-full max-md:px-6 mx-auto text-center text-[18px] gap-2">
          <h1 className="text-[48px] font-semibold ">Create Your <span className="text-prime">Menu</span> Faster!</h1>
          <h3 className="">
            Foody helps restaurants and cafes streamline operations with a suite of digital tools, enabling efficient management and enhanced customer satisfaction.</h3>
          <button className="my-4 font-bold bg-prime px-8 py-2 rounded-lg text-button" >Get Started</button>
        </div>
      </div>

      <div className="flex w-full px-16 max-md:px-8 max-md:my-12">
        <div className="w-full flex py-8 max-md:flex-col">
          <div className="w-full">
            <div className="w-full mr-2 max-w-xl">
              <h1 className="text-[36px] my-4">What is Foody?</h1>
              <p className="text-[18px] my-10 ml-6">
                Foody simplifies restaurant and cafe management with tools for digital menus, online orders, reservations, and staff scheduling. Customers can access menus and order via QR codes. Our feedback system offers insights to improve service, while employee scheduling and table management ensure smooth operations. Enhance efficiency and customer experience with Foody.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center"><img src={showcaseImg.src} alt="showcase image of the product" /></div>
        </div>
      </div>

      <dir className="h-screen w-screen grid place-items-center text-secnd p-0 max-md:my-12">
        <div className="w-full flex flex-col text-center justify-center items-center gap-12 max-md:gap-6">
          <div className="text-h2 max-md:text-h3">What does it provide? </div>
          <div className="flex gap-8 max-md:gap-4 flex-wrap justify-center px-4">
            <Feature 
              title="Menu Maker" 
              description="Create and manage digital menus with QR code integration for easy customer access." 
              logo={<HiOutlineQrcode />} />
            <Feature 
              title="Digital Ordering" 
              description="Provide a seamless digital menu and ordering experience for your customers." 
              logo={<TfiTablet className="text-7xl max-md:text-6xl"/>} />
            <Feature 
              title="Reservations" 
              description="Streamline your restaurant's reservation system with booking and management tools." 
              logo={<FaUserClock />} />
            <Feature 
              title="Customer Feedback" 
              description="Collect and analyze customer reviews and ratings to improve your service." 
              logo={<FaComments />} />
          </div>
        </div>
      </dir>

    </div>
  );
};
export default page;

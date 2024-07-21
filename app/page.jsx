import React from "react";
import showcaseImg from "@/public/assets/showcase.png"

const page = () => {
  return(
    <div className="">

      <div className="my-10 flex flex-col justify-center items-center max-w-[40vw] mx-auto text-center text-[18px] gap-2">
        <h1 className="text-[48px] font-semibold ">Create Your <span className="text-prime">Menu</span> Faster!</h1>
        <h3 className="">
Foody helps restaurants and cafes streamline operations with a suite of digital tools, enabling efficient management and enhanced customer satisfaction.</h3>
        <button className="my-4 font-semibold bg-prime px-8 py-2 rounded-lg" >Get Started</button>
      </div>

      <div className="flex w-full px-16 ">
        <div className="w-full flex py-8">
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

    </div>
  );
};
export default page;

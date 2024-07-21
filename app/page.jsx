import React from "react";
import showcaseImg from "./assets/showcase.png"

const page = () => {
  return(
    <div className="">

      <div className="my-10 flex flex-col justify-center items-center max-w-[40vw] mx-auto text-center text-[18px] gap-2">
        <h1 className="text-[48px] font-semibold">Create Your Menu Faster!</h1>
        <h3 className="">Foody helps restaurants and cafes streamline their operations with a suite of digital tools. Our platform allows you to manage various aspects of your business seamlessly, ensuring efficiency and enhancing customer satisfaction.</h3>
        <button className="my-4 font-semibold bg-[#A39F9F] px-4 py-2" >Get started</button>
      </div>

      <div className="flex w-full px-16 ">
        <div className="w-full flex py-8">
          <div className="w-full">
            <div className="w-full mr-2 max-w-xl">
              <h1 className="text-[36px] my-4">What is Foody?</h1>
              <p className="text-[18px] my-10 ml-3">
              Foody is an all-in-one platform designed to simplify restaurant and cafe management. Our intuitive tools help you manage everything from digital menus and online orders to reservations and staff scheduling. Foody’s QR code integration allows customers to easily access menus and place orders directly from their smartphones. With our customer feedback system, you can gather valuable insights to improve your service. Our employee scheduling and table management features ensure smooth operations and optimal service. Join the growing number of establishments that trust Foody to enhance their efficiency and customer experience.
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

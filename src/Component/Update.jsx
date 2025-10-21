import React, { useState } from "react";
import doller from "../assets/doller.png";
import setting from "../assets/setting.png";
import shop from "../assets/shop.png";
import graph from "../assets/graph.png";
import profit from "../assets/profit.png";
import dashboardImg from "../assets/Mask Group.png";

const Update = () => {
  const [active, setActive] = useState(1);

  const features = [
    { id: 1, img: doller, text: "Budget Overview" },
    { id: 2, img: setting, text: "Create & Adjust" },
    { id: 3, img: shop, text: "View Reports" },
    { id: 4, img: graph, text: "Optimize Website" },
    { id: 5, img: profit, text: "Custom Dashboard" },
  ];

  return (
    <div className="bg-[#353448] py-10 flex flex-col items-center text-white">
      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mb-5">
        {features.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              active === item.id
                ? "text-[#FFC059] scale-105"
                : "text-gray-300 hover:text-[#FFC059]"
            }`}
          >
            <img
              src={item.img}
              alt={item.text}
              className={`w-10 h-10 sm:w-12 sm:h-12 mb-2 transition-transform duration-300 ${
                active === item.id ? "opacity-100 scale-110" : "opacity-80"
              }`}
            />
            {/* underline animation */}
            <span
              className={`block h-[3px] w-0 bg-[#FFC059] rounded-full transition-all duration-500 ${
                active === item.id ? "w-8" : "w-0"
              }`}
            ></span>
          </div>
        ))}
      </div>

      {/* HR Line */}
      <hr className="w-[85%] border-gray-500 mb-5" />

      {/* Text Row */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16 text-sm sm:text-base font-medium text-gray-300 mb-12">
        {features.map((item) => (
          <p
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative cursor-pointer transition-all duration-300 pb-1 ${
              active === item.id
                ? "text-[#FFC059] after:w-full"
                : "hover:text-[#FFC059] after:w-0"
            } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#FFC059] after:transition-all after:duration-500 after:rounded-full`}
          >
            {item.text}
          </p>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-20">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-snug">
            Introduce quality feature <br /> that boost your website <br />
            rank & performance
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents. Get your tests delivered
            at let home collect sample from the victory of the supplies design
            system.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] font-semibold px-6 py-3 rounded-md transition-all">
            More Details
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={dashboardImg}
            alt="Dashboard Overview"
            className="w-[90%] max-w-2xl rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Update;

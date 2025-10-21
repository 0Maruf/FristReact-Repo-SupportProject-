import React from 'react';
import Futured from '../assets/wow.jpg';
import viteLogo9 from '../assets/arrow.png';

const Future = () => {
  return (
    <div className="w-[90%] mx-auto my-16 flex flex-col lg:flex-row justify-center items-center gap-10">

      {/* Left Image Section */}
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src={Futured}
          alt="Premium Feature"
          className="rounded-2xl w-full max-w-[500px] h-auto object-cover shadow-md"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Meet our premium features <br /> that will make you wow
        </h1>

        <p className="text-gray-600">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        {/* Sub section */}
        <div className="space-y-4">
          <p className="font-bold text-lg">Organize your project content</p>
          <p className="text-gray-600 text-sm md:text-base">
            Get your website ads tests delivered and collect samples from the victory of the
            management that supplies the best design system guidelines with multiple features.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4 mt-6">
          <div className="bg-[#F6F8FB] p-4 md:p-5 flex justify-between items-center rounded-xl hover:bg-[#e9edf3] transition-all duration-300 cursor-pointer">
            <p className="text-gray-700 font-medium text-sm md:text-base">
              Collaborate with your multiple team supports easily
            </p>
            <img src={viteLogo9} alt="arrow" className="w-6 h-6 object-contain" />
          </div>

          <div className="bg-[#F6F8FB] p-4 md:p-5 flex justify-between items-center rounded-xl hover:bg-[#e9edf3] transition-all duration-300 cursor-pointer">
            <p className="text-gray-700 font-medium text-sm md:text-base">
              Manage project workflows more efficiently
            </p>
            <img src={viteLogo9} alt="arrow" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;

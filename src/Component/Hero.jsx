import React from 'react';
import viteLogo4 from '../assets/Hero.png'
import viteLogo5 from '../assets/paypal.png'
import viteLogo6 from '../assets/google.png'
import viteLogo7 from '../assets/dropbox.png'

const Hero = () => {
    return (
       <div className="w-[80%] mx-auto my-16 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">

  {/* text div */}
  <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
    <p className="font-bold text-3xl md:text-4xl leading-snug">
      Ultimate support <br /> system for leading <br /> agencies
    </p>

    <p className="max-w-md mx-auto lg:mx-0 text-gray-600">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, recusandae voluptatem. 
      Possimus dolorum perspiciatis repudiandae cum, aliquid dolores necessitatibus ad tenetur asperiores, 
      repellat fugit facere veniam ut, rerum hic cupiditate.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <input
        type="text"
        placeholder="Enter your email address"
        className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC059] outline-none transition-all duration-200"
      />
      <button className="bg-[#FFC059] hover:bg-[#e5a740] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
        Get Started
      </button>
    </div>

    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-4">
      <p className="text-gray-500 font-medium">Sponsored by:</p>
      <img src={viteLogo5} alt="Logo1" className="w-20 h-auto object-contain" />
      <img src={viteLogo6} alt="Logo2" className="w-20 h-auto object-contain" />
      <img src={viteLogo7} alt="Logo3" className="w-20 h-auto object-contain" />
    </div>
  </div>

  {/* img div */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={viteLogo4}
      alt="Support Illustration"
      className="w-full max-w-[500px] h-auto object-contain"
    />
  </div>

</div>

    );
};

export default Hero;
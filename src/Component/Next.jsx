import React from 'react';
import chat from '../assets/chating.png';
import { FaAngleRight, FaCheckCircle } from 'react-icons/fa';

const Next = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-8 bg-gray-50">
      
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-lg  p-6 rounded-2xl ">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          Meet our premium features <br /> that will make you wow
        </h1>

        <p className="py-6 text-gray-600">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <ul className="space-y-3 border border-gray-100 p-4 rounded-xl shadow-sm bg-gray-50">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> Medical and vision
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> Life insurance
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> 401(k) savings
            </li>
          </ul>

          <ul className="space-y-3 border border-gray-100 p-4 rounded-xl shadow-sm bg-gray-50">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> HSAs and FSAs
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> Commuter benefits
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> 529 college savings
            </li>
          </ul>
        </div>

        <button className="text-blue-600 font-semibold flex items-center gap-2 mt-6 hover:text-blue-700 transition-all">
          Explore more
          <FaAngleRight size={20} className="transition-transform duration-200 hover:translate-x-1" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <img
          src={chat}
          alt="Chat Illustration"
          className="rounded-2xl w-[90%] max-w-[500px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Next;

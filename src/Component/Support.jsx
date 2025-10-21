import React from 'react';
import viteLogo8 from '../assets/support.png'
import viteLogo9 from '../assets/arrow.png'
const Support = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-[90%] mx-auto my-10">

            {/* card 1 */}
            <div className="flex items-center gap-4 p-5 w-full md:w-[430px] min-h-[230px] bg-white rounded-2xl shadow-md 
  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex-shrink-0">
                    <img src={viteLogo8} alt="icon" className="w-14 h-14 object-contain" />
                </div>
                <div className="flex-1 space-y-2">
                    <p className="font-bold text-lg">Do you need help support</p>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto labore animi? Tempora, reiciendis id.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img src={viteLogo9} alt="arrow" className="w-10 h-10 object-contain" />
                </div>
            </div>

            {/* card 2 */}
            <div className="flex items-center gap-4 p-5 w-full md:w-[430px] min-h-[230px] bg-white rounded-2xl shadow-md 
  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex-shrink-0">
                    <img src={viteLogo8} alt="icon" className="w-14 h-14 object-contain" />
                </div>
                <div className="flex-1 space-y-2">
                    <p className="font-bold text-lg">Do you need help support</p>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto labore animi? Tempora, reiciendis id.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img src={viteLogo9} alt="arrow" className="w-10 h-10 object-contain" />
                </div>
            </div>

        </div>


    );
};

export default Support;
import React from 'react';
import viteLogo1 from '../assets/Layer 2.png'
import viteLogo2 from '../assets/search.png'
import viteLogo3 from '../assets/login.png'




const Navbar = () => {
    return (
        <div className='flex justify-around py-6 items-center'>
            <div className='flex gap-5'> 
                <div><img src={viteLogo1} alt="" /></div>
                <div><p>StartupLand</p></div>
            </div>
            <div>
                <ul className='md:flex justify-center items-center gap-10 hidden'>  
                    <li ><a href="#">Home</a></li>
                    <li ><a href="#">Adversite</a></li>
                    <li ><a href="#">Supports</a></li>
                    <li ><a href="#">About</a></li>
                    <li><img src={viteLogo2} alt="" className='w-6' /></li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <div className='flex  gap-2 items-center
                '>
                    <div><img src={viteLogo3} alt=""  className='w-6'/></div>
                <div><p> Login</p></div>
                </div>
                <div><button className='hidden md:block bg-[#E5A740] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#cf922f] transition'>Get Started</button></div>
            </div>
        </div>
    );
};

export default Navbar;
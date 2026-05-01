import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <div className="relative w-full min-h-75">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                    style={{
                        backgroundImage:
                            "url('https://i.ibb.co/XQDQKHW/istockphoto-1267561350-612x612.jpg')",
                    }}
                ></div>

                <div className="relative z-10 top-20">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold text-white'>If You Win, Then We Win</h2>
                        <p className='text-white font-bold'>Contact Us For Help</p>
                        <p className='font-semibold text-white'>Our Email: <span className='underline hover:cursor-pointer bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent'>cowsintown@gmail.com</span></p>
                        <p className='text-white'>Join Us In......</p>
                        <ul className='flex gap-5 hover:cursor-pointer'>
                            <li className='flex gap-2 items-center'><FaFacebook /> Facebook</li>
                            <li className='flex gap-2 items-center text-gray-800'><AiFillInstagram /> Instagram</li>
                            <li className='flex gap-2 items-center text-gray-300'><FaSquareXTwitter /> Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { PiTrademarkRegisteredFill } from 'react-icons/pi';
import { RiLoginCircleFill } from 'react-icons/ri';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-white shadow-md'>
            <div className='w-10/12 mx-auto p-2 mt-3  flex flex-col sm:flex-row justify-between items-center gap-5'>
                <div>

                    <Image src='https://i.ibb.co.com/XQDQKHW/istockphoto-1267561350-612x612.jpg' width={80} height={50} alt='Cow-Delivery-Image' className='rounded-full'></Image>
                </div>
                <div>
                    <ul className='flex gap-4 items-center'>
                        <li className='bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'><NavLink href={'/'}>Home</NavLink></li>
                        <li className="bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"><NavLink href={'/animals'}>All Animals</NavLink></li>
                    </ul>
                </div>
                <div className='flex gap-4'>

                    <Link href={'/login'}><button className='btn btn-outline btn-accent font-bold text-gray-500'><RiLoginCircleFill />Login</button></Link>
                    <Link href={'/register'}><button className='btn btn-outline btn-warning font-bold text-gray-500'><PiTrademarkRegisteredFill />Register</button></Link>


                </div>
            </div>
        </div>

    );
};

export default Navbar;
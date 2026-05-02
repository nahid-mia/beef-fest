"use client";
import React, { useState } from 'react';
import { PiTrademarkRegisteredFill } from 'react-icons/pi';
import { RiLoginCircleFill } from 'react-icons/ri';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [user, setUser] = useState(false)
    const [error, setError] = useState(false);

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

                    {user ? (
                        <div className="flex gap-4 items-center">
                            <h2 className='font-semibold'>Hello, {user?.name}</h2>
                            {user?.image && user.image.startsWith("http") && !error ? (
                                <Image
                                    src={user.image}
                                    width={50}
                                    height={50}
                                    alt="User"
                                    onError={() => setError(true)}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                                    <FaUser size={20} />
                                </div>
                            )}
                            <Link href={'/myprofile'}><button className='btn btn-warning'>My Profile</button></Link>
                            <button onClick={handleLogout} className='btn btn-error'>Logout</button>
                        </div>
                    ) : (
                        <div className='flex gap-4'>
                            <Link href="/login">
                                <button className="btn btn-outline btn-accent font-bold text-gray-500">
                                    <RiLoginCircleFill />Login
                                </button>
                            </Link>
                            <Link href="/register">
                                <button className="btn btn-outline btn-warning font-bold text-gray-500">
                                    <PiTrademarkRegisteredFill />Register
                                </button>
                            </Link>
                        </div>
                    )}



                </div>
            </div>
        </div>

    );
};

export default Navbar;
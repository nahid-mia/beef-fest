"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="card w-150 lg:card-side bg-base-100 shadow-sm mx-auto my-20">

            <figure className="lg:w-1/2 relative h-64 lg:h-auto">
                {user?.image && user.image.startsWith("http") && !error ? (
                    <Image
                        src={user.image}
                        width={200}
                        height={200}
                        alt="User"
                        onError={() => setError(true)}
                        className="rounded-full"
                    />
                ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                        <FaUser size={200} />
                    </div>
                )}
            </figure>

            <div className="card-body lg:w-1/2">
                <h2 className="text-2xl font-semibold">
                    {user?.name}
                </h2>
                <p className='text-gray-600'>{user?.email}</p>
                <div className='flex items-center'>
                    <div className='flex gap-2'>
                        <Link href={'/animals'}><button className='btn btn-warning'>Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
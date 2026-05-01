import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailCard = ({ animal }) => {

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">

            <figure className="lg:w-1/2 relative h-64 lg:h-auto">
                <Image
                    src={animal.image}
                    alt="Image of the animal"
                    fill
                    className="object-cover"
                />
            </figure>

            <div className="card-body lg:w-1/2">
                <h2 className="text-2xl font-semibold">
                    {animal.name}
                </h2>
                <p className='text-gray-600'>{animal.description}</p>
                <div className='flex max-w-20 gap-3'>
                    <p className='font-bold'>Tags:</p>
                    <p className='bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>{animal.type}</p>
                    <p className='bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>{animal.breed}</p>
                </div>
                <p><span className='font-bold'>Category:</span> {animal.category}</p>
                <div className='flex'>
                    <p><span className='font-bold'>Age:</span> {animal.age}</p>
                    <p><span className='font-bold'>Weight: </span>{animal.weight}</p>
                </div>
                <p><span className='font-bold'>Price: </span>{animal.price}</p>
                <div className='flex items-center'>
                    <p><span className='font-bold'>Location:</span> {animal.location}</p>
                    <div className='flex gap-2'>
                        <button className='btn btn-success'>Book Now</button>
                        <Link href={'/animals'}><button className='btn btn-warning'>Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
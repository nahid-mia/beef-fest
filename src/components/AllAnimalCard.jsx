
import Image from 'next/image';
import React from 'react';
import 'animate.css';
import Link from 'next/link';

const AllAnimalCard = ({ animal }) => {

    return (
        <div className="card bg-slate-200 shadow-md animate__animated animate__backInRight transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <figure>
                <Image
                    src={animal.image}
                    width={100}
                    height={100}
                    alt={animal.name}
                    className='mt-5 object-cover'
                    style={{ height: 'auto', width: '300px' }}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>
                <p>{animal.description}</p>
                <div className='flex gap-5 items-center'>
                    <p className='font-bold'>{animal.price} tk</p>
                    <Link href={`/detailspage/${animal.id}`}><button className='btn btn-warning'>See All Details</button></Link>
                    <Link href={`/booking/${animal.id}`}><button className='btn btn-success'>Book Advance</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllAnimalCard;
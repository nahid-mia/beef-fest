import Image from 'next/image';
import React from 'react';
import 'animate.css';

const AnimalCard = ({ animal }) => {
    return (
        <div className="card bg-slate-200 shadow-md animate__animated animate__backInRight transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <figure>
                <Image
                    src={animal.image}
                    width={200}
                    height={200}
                    alt={animal.name}
                    className='mt-5 object-cover'
                    style={{ height: 'auto', width: '250px', objectFit: 'cover' }}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>
                <p>{animal.description}</p>

            </div>
        </div>
    );
};

export default AnimalCard;
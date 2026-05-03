'use client';
import DetailCard from '@/components/DetailCard';
import { featuredAnimals } from '@/lib/data';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailWithId = ({ params }) => {
    const paramId = useParams();
    const id = paramId.animalId
    const [animals, setAnimalData] = useState([]);
    useEffect(() => {
        if (!id) return;
        async function fetchData() {
            const data = await featuredAnimals();
            const filtered = data.filter(d => d.id === Number(id));
            setAnimalData(filtered);
        }
        fetchData();
    }, [id]);
    return (
        <div className='w-10/12 mx-auto my-20 p-20'>
            {animals.map(animal => {
                return <DetailCard key={animal.id} animal={animal}></DetailCard>
            })}
        </div>
    );
};

export default DetailWithId;
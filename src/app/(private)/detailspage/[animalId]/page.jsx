'use client';
import DetailCard from '@/components/DetailCard';
import { featuredAnimals } from '@/lib/data';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailWithId = ({ params }) => {
    const paramId = useParams();
    const id = paramId.animalId
    const [loading, setLoading] = useState(true)
    const [animals, setAnimalData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await featuredAnimals();
            const filtered = data.filter(d => d.id === Number(id));
            setAnimalData(filtered);
            setLoading(false);
        }
        fetchData();
    });
    if (loading) {
        return <div className="min-h-[70vh] container mx-auto flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    return (
        <div className='w-10/12 mx-auto my-20 p-20'>
            {animals.map(animal => {
                return <DetailCard key={animal.id} animal={animal}></DetailCard>
            })}
        </div>
    );
};

export default DetailWithId;
'use client';
import AllAnimalCard from '@/components/AllAnimalCard';
import { featuredAnimals } from '@/lib/data';
import React, { useEffect, useState } from 'react';

const AllAnimalPage = () => {
    const [loading, setLoading] = useState(true)
    const [animals, setAnimalData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await featuredAnimals();
            setAnimalData(data);
            setLoading(false);
        }
        fetchData();
    }, [setAnimalData, setLoading]);
    if (loading) {
        return <div className="min-h-[70vh] container mx-auto flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-20'>
            {animals.map(animal => {
                return <AllAnimalCard key={animal.id} animal={animal}></AllAnimalCard>
            })}
        </div>
    );
};

export default AllAnimalPage;
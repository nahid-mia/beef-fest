'use client';
import AllAnimalCard from '@/components/AllAnimalCard';
import { featuredAnimals } from '@/lib/data';
import React, { useEffect, useState } from 'react';

const AllAnimalPage = () => {
    const [loading, setLoading] = useState(true)
    const [animals, setAnimalData] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [category, setCategory] = useState('all');

    useEffect(() => {
        async function fetchData() {
            const data = await featuredAnimals();
            let result = [...data];
            if (category === 'all') {
                setAnimalData(result);
            }
            if (category !== "all") {
                result = result.filter(a => a.category === category);
                setAnimalData(result);
            };
            if (sortBy === 'price-asc') {
                result = result.sort((a, b) => a.price - b.price);
                setAnimalData(result);
            }
            if (sortBy === 'price-desc') {
                result = result.sort((a, b) => b.price - a.price);
                setAnimalData(result);
            }
            setLoading(false);
        }
        fetchData();
    }, [category, sortBy])


    if (loading) {
        return <div className="min-h-[70vh] container mx-auto flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex gap-5 items-center justify-center mt-10'>
                <div>
                    <button className="btn" popoverTarget="popover-price" style={{ anchorName: "--anchor-1" }}>
                        sort by price
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-price" style={{ positionAnchor: "--anchor-1" }}>
                        <li onClick={() => setSortBy("price-asc")}><a>Price ASC</a></li>
                        <li onClick={() => setSortBy("price-desc")}><a>Price DESC</a></li>
                    </ul>
                </div>
                <div>
                    <button className="btn" popoverTarget="popover-category" style={{ anchorName: "--anchor-2" }}>
                        filter by category
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-category" style={{ positionAnchor: "--anchor-2" }}>
                        <li onClick={() => setCategory('all')}><a>ALL</a></li>
                        <li onClick={() => setCategory('Large Animal')}><a>Large Animal</a></li>
                        <li onClick={() => setCategory('Small Animal')}><a>Small Animal</a></li>
                    </ul>
                </div>

            </div>
            <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-20'>
                {animals.map(animal => {
                    return <AllAnimalCard key={animal.id} animal={animal}></AllAnimalCard>
                })}
            </div>
        </div>

    );
};

export default AllAnimalPage;
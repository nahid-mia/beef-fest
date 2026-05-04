'use client';
import { featuredAnimals } from '@/lib/data';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({ params }) => {
    const router = useRouter();
    const paramId = useParams();
    const id = paramId.id;
    const [animal, setAnimalData] = useState([]);
    useEffect(() => {
        if (!id) return;
        async function fetchData() {
            const data = await featuredAnimals();
            const bookingAnimal = data.find(p => p.id === Number(id))
            setAnimalData(bookingAnimal);
        }
        fetchData();
    }, [id]);

    const handleSubmit = (e, name) => {
        e.preventDefault();
        router.push('/animals');
        toast.success(`One ${name} has been booked`);
    }

    return (
        <div className='flex justify-center items-center my-20'>
            <form onSubmit={(e) => handleSubmit(e, animal.name)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Booking for {animal.name}</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Type your Name" required />
                    <label className="label">Phone</label>
                    <input type="text" className="input" placeholder="Type your contact Number" required />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Type your Email" required />
                    <label className="label">Address</label>
                    <input type="text" className="input" placeholder="Give your Address" required />

                    <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default BookingForm;
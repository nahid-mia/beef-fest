'use client';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileUpdate = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = async (data) => {

        const update = async () => await authClient.updateUser({
            image: data.image,
            name: data.name,
        })
        update();
        redirect('/');
    }

    return (
        <div className='container mx-auto min-h-[70vh] flex items-center justify-center'>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Update Data</legend>

                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: "Name is required" })} className="input" placeholder="Email" />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" {...register("image")} placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Update Information</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ProfileUpdate;
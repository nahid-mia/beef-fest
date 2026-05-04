'use client';
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileUpdate = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: session, refetch } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleUpdate = async (data) => {
        const { name, image } = data;
        await authClient.updateUser({
            name: name,
            image: image,
        });
        await refetch();
        router.push("/myprofile");
    };

    return (
        <div className='container mx-auto min-h-[70vh] flex items-center justify-center'>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Update Data</legend>

                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: "Name is required" })} className="input" placeholder="Type Your Name" />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" {...register("image")} placeholder="Paste your imagel url" />

                    <button className="btn btn-neutral mt-4">Update Information</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ProfileUpdate;
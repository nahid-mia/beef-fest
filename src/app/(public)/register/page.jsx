"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        const { name, email, image, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "/",
        });

        if (res) {
            toast.success("User is Now Registered registered");
        } else {
            toast.error("User is already registered");
        }
    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className='flex flex-col w-xs mx-auto items-center justify-center my-20'>
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className='label'>Name</label>
                    <input type="text" {...register("name")} className='input' placeholder='Type your Name' />

                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email is Required" })} type="email" className="input" placeholder="Type your Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className='label'>Photo-URL</label>
                    <input type="text" {...register("image")} className='input' placeholder='Give your image Link' />

                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password is Required" })} type="password" className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
            <div className="divider">OR</div>
            <Link href={'/login'} className='w-11/12'><button className='btn w-full bg-gray-500 text-white'>Login By Email</button></Link>
            <button className='btn w-11/12 bg-gray-500 text-white' onClick={signIn}>Login By Google</button>

        </div>
    );
};

export default RegisterPage;
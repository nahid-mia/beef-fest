"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const handleRegister = async (data) => {
        const { name, email, image, password } = data;

        console.log(data);
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/",
        });
        if (res) {
            toast.success(`${name} is now registered`);
            router.push("/");
        }
        if (error) {
            toast.warning(`${name} is already registered from before`);
            console.log(error)
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
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className='label'>Name</label>
                    <input type="text" {...register("name", { required: "Name is Required" })} className='input' placeholder='Type your Name' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

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
            <button onClick={() => signIn()} className='btn w-11/12 bg-gray-500 text-white'>Login By Google</button>

        </div>
    );
};

export default RegisterPage;
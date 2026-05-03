'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const handleLogin = async (data) => {
        console.log(data);
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (res) {
            toast.success('User Logged in Successfully');
            router.push("/");
        }
        if (error) {
            toast.warning('Invalid email or password')
        }
    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className='flex flex-col w-xs mx-auto items-center justify-center my-20'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email is Required" })} type="email" className="input" placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}


                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password is Required" })} type="password" className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
            <div className="divider">OR</div>
            <button onClick={()=>signIn()} className='btn btn-neutral w-11/12'><GrGoogle></GrGoogle> Login With Google</button>
            <p className='text-center'>Don't have a Account? <span className='text-pink-500'><Link href={'/register'}>Register</Link></span></p>
        </div>
    );
};

export default LoginPage;
import Link from 'next/link';
import React from 'react';
import { GrGoogle } from 'react-icons/gr';

const LoginPage = () => {
    return (
        <div className='flex flex-col w-xs mx-auto items-center justify-center my-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='email' type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="divider">OR</div>
            <button className='btn btn-neutral w-11/12'><GrGoogle></GrGoogle> Login With Google</button>
            <p className='text-center'>Don't have a Account? <span className='text-pink-500'><Link href={'/register'}>Register</Link></span></p>
        </div>
    );
};

export default LoginPage;
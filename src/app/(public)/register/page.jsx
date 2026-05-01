import Link from 'next/link';
import React from 'react';
import { GrGoogle } from 'react-icons/gr';

const RegisterPage = () => {
    return (
        <div className='flex flex-col w-xs mx-auto items-center justify-center my-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className='label'>Name</label>
                <input type="text" name='name' className='input' placeholder='Type your Name' />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Type your Email" />

                <label className='label'>Photo-URL</label>
                <input type="text" name='image' className='input' placeholder='Give your image Link' />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
        </div>
    );
};

export default RegisterPage;
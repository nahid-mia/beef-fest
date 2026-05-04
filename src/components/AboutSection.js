import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='flex flex-col md:flex-row w-10/12 mx-auto justify-between items-center gap-20 bg-slate-200 p-20 my-20 rounded-3xl'>
            <div className='flex flex-col'>
                <h2 className='text-xl font-bold'>Safe. Reliable. Responsible animal delivery.</h2>
                <p>At our core, we care about animals and the people who depend on them. Our service is designed to make animal delivery easy, safe, and stress-free. We work with trusted partners and trained handlers to make sure every delivery is handled with compassion and professionalism.</p>
            </div>
            <div>
                <Image src={"https://i.ibb.co.com/PvpP6JHN/ae54284bc95db8cf33e70dcb01df332d.jpg"} width={800} height={800} alt='Elegent Image of Eid ul Azha'></Image>
            </div>
        </div>
    );
};

export default AboutSection;
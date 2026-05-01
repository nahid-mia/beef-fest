import React from 'react';

const TipsSection = () => {
    return (
        <div className="relative w-full min-h-75">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/4Zd8WFsg/1.webp')",
                }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white flex flex-col gap-5 px-4 py-5 sm:px-10 md:px-20 max-w-2xl">
                <h2 className='text-xl'>Remember.....</h2>
                <ul className='list-disc list-inside space-y-3'>
                    <li>“A healthy animal ensures both proper Qurbani and better meat quality.”</li>
                    <li>“Qurbani must be done within the prescribed days to be valid.”</li>
                    <li>“Sharing is the essence of Qurbani — don't forget those in need.”</li>
                    <li>“Verified sellers ensure peace of mind during Eid.”</li>
                    <li>“Choose active and disease-free animals for proper Qurbani.”</li>
                </ul>
            </div>
        </div>
    );
};

export default TipsSection;
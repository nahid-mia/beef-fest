'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const DetailWithId = ({ params }) => {
    const paramId = useParams();
    console.log(paramId);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default DetailWithId;
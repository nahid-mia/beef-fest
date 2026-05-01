"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    if (href === pathname) {
        return (
            <Link href={href} className="border-b-2 border-b-black">{children}</Link>
        );
    }

    return <Link href={href}>{children}</Link>;
};

export default NavLink;
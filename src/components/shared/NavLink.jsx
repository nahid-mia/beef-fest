'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {

    const pathName = usePathname();
    if (href === pathName) {
        return <Link href={href} className="underline">{children}</Link>
    }

    return (
        <Link href={href}>{children}</Link>
    );
};

export default NavLink;
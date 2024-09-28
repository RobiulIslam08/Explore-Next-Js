"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';


const Navbar = () => {
        const pathName = usePathname()
        const router = useRouter()
        const  handler  = () =>{
                router.push('/login')
        }
        const links = [
                {
                        title: "Home",
                        path: '/'
                },
                {
                        title: "About",
                        path: '/about'
                },
                {
                        title: "Service",
                        path: '/service'
                },
                {
                        title: "Contact",
                        path: '/contact',
                },
                {
                        title: "Blog",
                        path: '/blog',
                },
        ]
        return (
                <nav className="flex justify-between py-4 px-4 text-white bg-gray-500">
                        <h1 className='font-bold text-orange-300 text-2xl'>Next Hero</h1>
                        <ul className='flex gap-5 '>
                                {links.map((link) =>
                                        <li key={link.title}><Link className={`${pathName === link?.path && "text-lime-500"}  `} href={link?.path}>{link.title}</Link></li>
                                )}
                        </ul>
                        <button onClick={handler} className='px-4 py-1 bg-[#9943d3] rounded-sm'>Login </button>

                </nav>

        );
};

export default Navbar;
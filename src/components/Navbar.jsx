"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';


const Navbar = () => {
        const pathName = usePathname();
        const router = useRouter();
        const session = useSession();
        console.log(session)
        const handler = () => {
                router.push('/api/auth/signin')
        };
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
                {
                        title: "Dashboard",
                        path: '/dashboard',
                },
                {
                        title: "Category",
                        path: '/category',
                },
                {
                        title: "Post",
                        path: '/posts',
                },
                {
                        title: "Meals",
                        path: '/meals',
                },
        ]

        if (pathName.includes('dashboard')) {
                return <div className='p-10'>
                        dashboard Layout
                </div>
        } else {
                return (
                        <nav className="flex justify-between items-center py-4 px-4 text-white bg-gray-500">
                                <h1 className='font-bold text-orange-300 text-2xl'>Next Hero</h1>
                                <ul className='flex gap-5 '>
                                        {links.map((link) =>
                                                <li key={link.title}><Link className={`${pathName === link?.path && "text-orange-400 font-bold"}  `} href={link?.path}>{link.title}</Link></li>
                                        )}
                                </ul>
                               <div className='flex gap-8 items-center'>
                               {
                                        session.status !== "authenticated"
                                                ?
                                                <button onClick={handler} className='px-4 py-1 bg-[#9943d3] rounded-sm'>Login </button>
                                                : <button onClick={()=>signOut()} className='bg-yellow-800 px-5 py-1'>logout</button>
                                }

                                <div className='flex gap-4 items-center'>
                                       <div>
                                       <h1>{session?.data?.user?.name}</h1>
                                       <h1>{session?.data?.user?.type}</h1>
                                       </div>
                                       {   session.status === "authenticated" && <Image className='w-[50px] h-[50px] rounded-full' src={session?.data?.user?.image} width={50} height={50} alt={session?.data?.user?.name}/>}
                                </div>
                               </div>

                        </nav>

                );
        }

};

export default Navbar;
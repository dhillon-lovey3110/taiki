import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return <>
        <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
            <button onClick={handleClick} className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>
            <div className='hidden w-full md:hidden'>
            <div className='md:hidden w-full lg:items-center items-start flex flex-col lg:h-auto'>
                {menuLinks.map( (v,i) => {
                    return <>
                        <Link href={v.url}>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                                {v.title}
                            </a>
                        </Link>
                    </>;
                })}
            </div>
            </div>
        </nav>
    </>;
};

const menuLinks = [
    {
        title:'What is Taiki Friends?',
        url:''
    },
    {
        title:'Taiki Map',
        url:''
    },
    {
        title:'FAQ',
        url:''
    },
    {
        title:'Taiki Team',
        url:''
    },
];

export { Navbar, menuLinks };
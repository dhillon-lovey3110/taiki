import Link from 'next/link';
import { useState, ReactNode } from 'react';

interface IHeaderProps {
    publicMenu?: ReactNode;
}

const publicMenu = () => {
    return <>
        {menuLinks.map( (v,i) => {
            return <div key={'mobile-link-'+i} className="w-full px-5 py-3 bg-black">
                <Link href={v.url}>
                    <a className='text-dark font-bold hover:text-white '>
                        {v.title}
                    </a>
                </Link>
            </div>;
        })}
    </>;
  }

const Navbar = (props: IHeaderProps) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        console.log(active);
    };

    return <>
        <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
            <button onClick={handleClick} className='inline-flex p-3 hover:bg-gray-900 rounded md:hidden text-white ml-auto hover:text-white outline-none'>
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
            <div className='w-full md:hidden'>
                <div className={'absolute top-[150px] left-0 bg-background w-full lg:items-center items-start flex flex-col lg:h-auto right-0 z-20 pt-10 transition-all duration-1000 opacity-0 z-[-111]'+(active?' z-[111] !opacity-100':'')}>
                    {props.publicMenu || publicMenu()}
                </div>
            </div>
        </nav>
    </>;
};

const menuLinks = [
    {
        title:'What is Taiki Friends?',
        url:'/'
    },
    {
        title:'Taiki Map',
        url:'/'
    },
    {
        title:'FAQ',
        url:'/'
    },
    {
        title:'Taiki Team',
        url:'/'
    },
];

const walletLinks = [
    {
        title:'wallet',
        action:'',
        image:'/assets/images/wallet.png'
    }
];

export { Navbar, menuLinks, walletLinks };
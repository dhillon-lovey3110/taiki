import React,{useRef} from 'react';
import { Navbar, menuLinks, walletLinks } from "./navbar";
import type {ReactNode} from 'react';
import Image from 'next/image';

interface IHeaderProps {
  publicMenu?: ReactNode;
  sticky?: boolean;
}

const publicMenu = () => {
  return <>
    {menuLinks.map( (v,i) => {
      return <div key={'desk-link-'+i} className="flex flex-row gap-8">
        <li className="cursor-pointer font-ppagradir text-[18px] hover:text-gray-100 transition-all duration-500 hover:scale-110">{v.title}</li>
        {(i!=menuLinks.length-1)&&<li className="">/</li>}
      </div>;
    })}
  </>;
}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <div className="flex-grow">
        <div className='mx-auto max-w-7xl my-16'>
          <div className="flex flex-row justify-between items-center mx-5">
              <div className="flex flex-row flex-shrink-0 gap-5">
                  <a className="bg-white inline-flex text-black px-3 py-3 rounded-full cursor-pointer leading-8 transition-all hover:bg-buttonHover duration-500 hover:scale-110"><Image src="/assets/images/twitter-black.svg" height={30} width={30} alt="" /></a>
                  <a className="bg-white inline-flex text-black px-3 py-3 rounded-full cursor-pointer leading-8 transition-all hover:bg-buttonHover duration-500 hover:scale-110"><Image src="/assets/images/discord-black.svg" height={30} width={30} alt="" /></a>
              </div>
              <Navbar publicMenu={props.publicMenu} />
              <div className="hidden md:flex md:flex-row md:flex-grow-1 px-5">
                  <ul className="inline-flex gap-7 text-themeDark">
                    {props.publicMenu || publicMenu()}
                  </ul>
              </div>
              <div className="hidden md:flex md:flex-row md:flex-shrink-0">
                {walletLinks.map( (v,i) => {
                  return <div key={"wallet-"+i} >
                    <a className="bg-white inline-flex text-black px-5 py-3 rounded-full cursor-pointer font-ppagradirNarrow leading-8 transition-all hover:bg-buttonHover duration-500 hover:scale-110"><Image src="/assets/images/wallet-black.svg" height={27} width={27} alt="" />&nbsp;&nbsp;Connect wallet</a>
                  </div>;
                } )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
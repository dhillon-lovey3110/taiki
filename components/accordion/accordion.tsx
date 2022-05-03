import { useState } from 'react';

type IAccordionProps = {
  title: string;
  content: string;
  open?: boolean
};

export default function Accordion(props: IAccordionProps) {
    const setting = props.open || false;
    const [show, setShow] = useState(setting);
  
  return (
    <>
        <h2 className='cursor-pointer text-[24px] font-agradir font-ppagradirBold font-extrabold mb-10 relative z-50' onClick={ () => { setShow(!show); }}>{props.title} {show==false?
        <svg xmlns="http://www.w3.org/2000/svg" className={show?'hidden':'transition-all rotate-90 opacity-100 duration-500 h-6 w-6 inline-block absolute right-0'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>:
        <svg xmlns="http://www.w3.org/2000/svg" className={!show?'hidden':'transition-all rotate-180 opacity-100 duration-500 h-6 w-6 inline-block absolute right-0'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
        }</h2>
        <div className={"transition-all duration-500  " + (show==false?'opacity-0 h-0':'opacity-100 md:h-28')}>
          <div className={"text-[18px] font-ppagradir font-agradir mb-10 font-extralight text-dark transition-opacity delay-500 duration-500 opacity-0" + (show==false?"":'opacity-100')}>{props.content}</div>
        </div>
        <hr className='mb-10' />
    </>
  );
}
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
        <h2 className='cursor-pointer text-2xl font-agradir font-extrabold mb-10' onClick={ () => { setShow(!show); }}>{props.title} {show==false?
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block absolute right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>:
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block absolute right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        }</h2>
        <div className={show==false?'hidden':'text-2xl font-agradir mb-10 font-extralight text-dark'}>{props.content}</div>
        <hr className='mb-10' />
    </>
  );
}
import { useState } from 'react';

type IAccordionProps = {
  url: string;
  open?: boolean
};

export default function NFTS(props: IAccordionProps) {
    const setting = props.open || false;
    const [show, setShow] = useState(setting);
  
  return (
    <>
        <li className={show?'overflow-hidden w-56 inline-block rounded-2xl mr-2':'overflow-hidden w-10 hover:w-56 inline-block rounded-2xl mr-2'}>
          <img src={props.url} className='object-cover h-56 w-56' alt='' />
        </li>
    </>
  );
}
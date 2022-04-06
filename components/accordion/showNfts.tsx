import { useState } from 'react';
import { motion } from 'framer-motion';

type IAccordionProps = {
  url?: string;
  open?: boolean
};

const NFT = (props: IAccordionProps) => {
    const setting = props.open || false;
    const [show, setShow] = useState(setting);
    return (
      <>
          <motion.div whileHover={{width:220}} className={show?'overflow-hidden w-56 inline-block rounded-2xl mr-2':'overflow-hidden w-10 float-left rounded-2xl mr-2'}>
            <img src={props.url} className='object-cover h-56 w-56' alt='' />
          </motion.div>
      </>
    );
}

const NFTS = (props: IAccordionProps) => {
  const array = [...Array(100)] 
  return (
    <>
      <div className='overflow-x-scroll'>
        <div className='inline-flex'>
          {array.map( (_,i) => {
            return <NFT key={'image-'+(i+1)} url={'/assets/images/nfts/'+(i+1)+'.png'} />
          })}
        </div>
      </div>
    </>
  );
}

export default NFTS;
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IAccordionProps = {
  url?: string;
  open?: boolean
};

const NFT = (props: IAccordionProps) => {
    const setting = props.open || false;
    const [show, setShow] = useState(setting);

    const handleHover = () => {
      setShow(!show);
    }
    return (
      <>
          <motion.div transition={{ duration: .25 }} whileHover={{width:220}} onHoverStart={handleHover} onHoverEnd={handleHover} className={'overflow-hidden rounded-2xl mr-2 ' + (show?'w-56':'w-10')}>
            <div className={'h-56 relative bg-white '+(show?'':'')}>
                <Image src={props.url} layout="fill" objectFit="cover" objectPosition="center" />
            </div>
          </motion.div>
      </>
    );
}

const NFTS = (props: IAccordionProps) => {
  const array = [...Array(40)] 
  return (
    <>
      <div className='overflow-x-scroll text-center'>
        <div className='inline-flex bg-[#100f0b] py-1 border-t-[10px] border-b-8 border-[#262421]'>
          {array.map( (_,i) => {
            return <NFT key={'image-'+(i+1)} url={'/assets/images/nfts/'+(i+1)+'.png'} />
          })}
        </div>
      </div>
    </>
  );
}

export default NFTS;
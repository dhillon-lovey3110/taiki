import React,{ useEffect, useState } from 'react';
import Layout from '../components/Layouts/Layout';
import Meta from '../components/Layouts/Meta';
import Accordion from '../components/accordion/accordion';
import NFTS from '../components/accordion/showNfts';
import ImageSlide from '../components/imageSlide';
import { motion } from 'framer-motion';

const header = () => {
    const [playerActive,setPlayerActive] = useState(false);
    const [audio, setAudio] = useState(null)
    const [lamp, setLamp] = useState('/assets/images/books_and_light.svg');
    const [lampPower, setLampPower] = useState(false);
    
    useEffect(() => {
      setAudio(new Audio('/assets/music/coldplay-sparks.mp3'));
    // only run once on the first render on the client
    }, [])

    const handlePlayer = () => {
      if(playerActive==false){
        audio.play();
      }else{
        audio.currentTime = 0;
        audio.pause();
      }
      setPlayerActive(!playerActive);
    }

    const handleLamp = () => {
      setLamp('/assets/images/books_and_light2.svg');
      if(lampPower){
        setTimeout(function(){
          setLamp('/assets/images/books_and_light.svg');
        },500)
      }else{
        setTimeout(function(){
          setLamp('/assets/images/books_and_light3.svg');
        },500)
      }
      setLampPower(!lampPower);
    }

    return <>
      <div className='mx-auto max-w-7xl relative px-4'>
        <img src="/logo.svg" className='mx-auto mb-16' alt="Taiki" />
        <p className='font-ppagradir text-[21px] text-center max-w-sm mx-auto font-thin text-gray-400 mb-12 relative z-20'>Your friendly NFT collection for shiba inu lovers and lofi hip-hop enthusiasts.</p>
        <p className='text-center mb-8'><a className="bg-white inline-flex text-black px-5 py-3 rounded-full cursor-pointer font-ppagradir leading-8 hover:transition-all hover:duration-500 hover:scale-110"><img src="/assets/images/discord-black.svg" alt="" className="mr-3" />Join the Discord</a></p>
        <p className='font-ppagradir text-[18px] text-center max-w-sm mx-auto font-thin text-gray-400 pb-24 relative z-20'>Launch Date: Around May 2022</p>
        <div className='hidden md:block absolute bottom-0 right-0 z-10' onClick={handleLamp}>
           <img src={lamp} alt="books and light" className='w-full' />
           <div className='bg-transparent cursor-pointer rounded-full h-5 w-5 absolute right-[38px] top-[165px]'></div>
        </div>
        <div className='hidden md:block absolute bottom-0 left-0 z-10'>
            <p className='absolute bottom-5 right-16 font-semibold text-sm'><a onClick={handlePlayer} className={playerActive?'mr-2 cursor-pointer':'mr-2 cursor-pointer text-gray-500'}>ON</a><a onClick={handlePlayer}   className={playerActive?'cursor-pointer text-gray-500':'cursor-pointer'}>OFF</a></p>
            <img src="/assets/images/music_player.png" alt="books and light" className='w-full' />
        </div>
      </div>
      <div className='border-b-8 border-b-dark mb-2'></div>
      <NFTS />
      <div className='border-b-8 border-b-dark'></div>
    </>;
}

const funCollection = () => {
  return <>
    <div className='mx-auto max-w-5xl relative px-4'>
        <div className='flex flex-col items-center py-16 md:flex-row md:justify-center'>
          <div className='flex-1 p-10 content-center font-ppagradirBold text-[38px]'>
            A fun collection for dog and music lovers.
          </div>
          <div className='flex-1 p-10 flex items-center'>
            <p className='max-w-sm text-[21px] text-dark font-ppagradir'>Taiki Friends is an NFT collection of 7,777 randomly generated super cute shiba inus living on the Ethereum blockchain.</p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-5xl relative mb-11 px-4'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:justify-center'>
          <div className='flex-1 max-w-md content-center bg-[#131A16] rounded-2xl'>
            <p className='px-8 py-8 font-ppagradirBold text-[34px]'><span className="text-[#00FF7E]">7,777</span><br />Randomly<br />Generated<br />Friends</p>
            <p className='px-8 text-[18px] mb-5 text-dark font-ppagradir'>Open your shiba basket to reveal a random combination of head traits, face traits, expressions, body traits, and backgrounds. Who knows what kind of friend you’ll get?</p>
            <img src='/assets/images/7777-footer.png' alt='' />
          </div>
          <div className='flex-1 max-w-md content-center bg-[#141416] rounded-2xl'>
            <p className='px-8 py-8 font-ppagradirBold text-[34px]'><span className="super-rare">Super Rare</span><br />Collectible<br />1-of-1<br />Combinations</p>
            <p className='px-8 mb-5 text-[18px] text-dark font-ppagradir'>Have a chance to discover limited unique combinations that make your shiba inu avatar truly special and stand out from the rest.<br /><br /></p>
            <img src='/assets/images/super-rare-footer.png' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl relative mb-12 px-4'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:justify-center'>
          <div className='flex-grow-1 max-w-md content-center bg-[#0F1B19] rounded-2xl'>
            <p className='px-8 py-8 font-ppagradirBold text-[34px]'><span className="animal-charity">Animal Charity</span><br />Contributions</p>
            <p className='px-8 text-[18px] mb-5 text-dark font-ppagradir'>Giving is a core part of our project. We plan to donate a percentage of our mint to help animal charities and charities that resonate with us and the community.</p>
            <img src='/assets/images/animal-charity-footer.png' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-[#191B13] rounded-2xl'>
            <p className='px-8 py-8 font-ppagradirBold text-[34px]'><span className="cool-exclusive">Cool Exclusive</span><br />Holder Perks</p>
            <p className='px-8 mb-5 text-[18px] text-dark font-ppagradir'>Gain exclusive holder perks as a Taiki Friends NFT holder. Private channels to chat with other holders, whitelist giveaways, sneak peeks, and more!</p>
            <img src='/assets/images/cool-exclusive-footer.png' alt='' />
          </div>
        </div>
      </div>
  </>;
}

const currentHolders = () => {
  return <>
      <div className='mx-auto max-w-7xl mt-36 relative px-4'>
        <div className='max-w-3xl mx-auto mb-7'>
          <p className='font-ppagradirBold text-[46px] text-center'>Current Holder Perks</p>
        </div>
        <p className='text-base text-center text-dark mb-14 font-ppagradir text-[21px]'>Amazing perks for planned for our holders.</p>
        <div className='flex flex-col gap-10 md:flex-row'>
            <div className='bg-[#1D1D16] p-10 flex-1 rounded-2xl'>
              <img src="/assets/images/crown-gold.svg" className='mb-3' alt="" />
              <p className='font-ppagradirBold text-[24px] mb-3'>
                Whitelist<br />
                Giveaways
              </p>
              <p className='text-dark font-ppagradir'>Access weekly whitelist giveaways through our holder’s Discord channel.</p>
            </div>
            <div className='bg-[#171F23] p-10 flex-1 rounded-2xl'>
            <img src="/assets/images/voting-blue.svg" className='mb-3' alt="" />
              <p className='font-ppagradirBold text-[24px] mb-3'>
                Voting &amp; Decision-<br />
                Making
              </p>
              <p className='text-dark font-ppagradir'>Influence roadmap decisions through voting polls, feedback, and other democratic means.</p>
            </div>
            <div className='bg-[#19241C] p-10 flex-1 rounded-2xl'>
            <img src="/assets/images/bear-smile-green.svg" className='mb-3' alt="" />
              <p className='font-ppagradirBold text-[24px] mb-3'>
                Exclusive Sneak<br />
                Peeks
              </p>
              <p className='text-dark font-ppagradir'>Get regular exclusive updates on our project status and progress.</p>
            </div>
        </div>
      </div>
  </>;
}

const morePerks = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative px-4'>
        <div className='flex justify-center mb-5'>
          <div className='flex-shrink-1 self-center'>
            <img src="/assets/images/sparkle-grey.svg" alt="" />
          </div>
          <div className='flex-grow-0 text-center text-dark px-5 font-ppagradirBold text-[24px]'>
            More Perks to be<br />Announced!
          </div>
          <div className='flex-shrink-1 self-center'>
            <img src="/assets/images/sparkle-grey.svg" alt="" />
          </div>
        </div>
        <p className='text-base text-[18px] font-ppagradir text-center text-dark mb-20'>Stay updated via our <span className='text-white underline'>Discord.</span> </p>
      </div>
      <ImageSlide />
  </>;
}

const taikiMap = () => {
  return <>
      <div className='mx-auto max-w-7xl mt-36 relative px-4'>
        <div className='max-w-3xl mx-auto mb-7'>
          <p className='font-ppagradirBold text-[46px] text-center'>The Taiki Map</p>
        </div>
        <p className='text-base text-center text-dark mb-14 font-ppagradir text-[21px]'>The current tentative roadmap for Taiki Friends.</p>
        <div className='flex flex-col items-center md:justify-center gap-10 md:flex-row mb-10'>
          <div className='flex-grow-1 max-w-md content-center bg-darkBlue rounded-2xl relative overflow-hidden'>
            <div className='bg-[#334C85] p-5 m-8 rounded-2xl flex gap-7 align-middle'>
              <div className='bg-darkBlue h-16 w-16 text-center pt-2 text-[32px] rounded-full font-ppagradirBold flex-shrink-0'>1</div>
              <div className='font-ppagradirBold text-[20px]'>X% of Mint Back into the Project</div>
            </div>
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>After launch, a large sum of our mint capital will be refinanced back into our project to fund the future development of our roadmap.</p>
            <img src='/assets/images/dollar-sign.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-darkGreen rounded-2xl relative overflow-hidden'>
            <div className='bg-[#008B42] p-5 m-8 rounded-2xl flex gap-7 align-middle'>
              <div className='bg-[#00772E] h-16 w-16 text-center pt-2 text-[32px] rounded-full font-ppagradirBold flex-shrink-0'>2</div>
              <div className='font-ppagradirBold text-[20px]'>Untitled Points- Based Game</div>
            </div>
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>Let the games begin! Collect Taiki points to win rewards such as ultra-rare Taikis, Taiki-themed isometric web3 rooms, and so much more!</p>
            <img src='/assets/images/numbers.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl relative mt-10 mb-12 px-4'>
      <div className='flex flex-col items-center md:justify-center gap-10 md:flex-row'>
          <div className='flex-grow-1 max-w-md content-center bg-darkRed rounded-2xl relative overflow-hidden'>
            <div className='bg-[#BC2A34] p-5 m-8 rounded-2xl flex gap-7 align-middle'>
              <div className='bg-[#9B1724] h-16 w-16 text-center pt-2 text-[32px] rounded-full font-ppagradirBold flex-shrink-0'>3</div>
              <div className='font-ppagradirBold text-[20px]'>Online Taiki Tamagotchi</div>
            </div>
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>After launch, a large sum of our mint capital will be refinanced back into our project to fund the future development of our roadmap.</p>
            <img src='/assets/images/calc.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-darkYellow rounded-2xl relative overflow-hidden'>
            <div className='bg-[#B39337] p-5 px-3 m-8 rounded-2xl flex gap-7 align-middle'>
              <div className='bg-[#A17608] h-16 w-16 text-center pt-2 text-[32px] rounded-full font-ppagradirBold flex-shrink-0'>4</div>
              <div className='font-ppagradirBold text-[20px]'>Taikiverse + Future Partnerships</div>
            </div>
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>Let the games begin! Collect Taiki points to win rewards such as ultra-rare Taikis, Taiki-themed isometric web3 rooms, and so much more!</p>
            <img src='/assets/images/smiley.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-md relative mt-12 mb-12 text-center'>We’re constantly working to refine and improve our roadmap. Keep up with the progress here.</div>
  </>;
}

const faq = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative px-5'>
      <div className='max-w-2xl mx-auto mb-32'>
        <p className='font-ppagradirBold text-[46px] text-center'>You have questions? We have answers.</p>
      </div>
      <div className='mx-auto max-w-5xl relative mt-12 mb-12'>
        <Accordion title="What the hell are NFTs?" open={true} content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What’s so special about Taiki Friends?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What is the release date of the collection?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What charities will you be donating to?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
      </div>
      <div className='text-center text-[21px] font-ppagradir mx-auto text-dark leading-10 mt-8 mb-8'>
        Have a question that’s not on this list? <span className='text-white underline'>Ask us directly</span> on our Discord.
      </div>
    </div>
  </>;
}

const teamTaiki = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative px-4'>
        <div className='max-w-sm mx-auto mb-20'>
          <p className='font-ppagradirBold text-[46px] text-center'>Team Taiki</p>
        </div>
        <div className='flex flex-col items-center md:justify-center gap-10 md:flex-row'>
          <div>
            <img src="/assets/images/acornzzi.png" className='h-56 md:h-full' alt='' />
            <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>acornzzi</p>
            <p className='text-base text-center text-dark mt-3 font-ppagradir'>Artist</p>
          </div>
          <div>
            <img src="/assets/images/fr1nge.png" className='h-56 md:h-full' alt='' />
            <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>fr1nge</p>
            <p className='text-base text-center text-dark mt-3 font-ppagradir'>Founder</p>
          </div>
          <div>
            <img src="/assets/images/kazi.png" className='h-56 md:h-full' alt='' />
            <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>kazi</p>
            <p className='text-base text-center text-dark mt-3 font-ppagradir'>Digital Designer/Product</p>
          </div>
          <div>
            <img src="/assets/images/leon.png" className='h-56 md:h-full' alt='' />
            <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>Leon</p>
            <p className='text-base text-center text-dark mt-3 font-ppagradir'>Management</p>
          </div>
        </div>
      </div>
  </>;
}

const hangWithUs = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative px-4'>
        <div className='max-w-2xl mx-auto mb-8'>
          <p className='font-ppagradirBold text-[46px] text-center'>Come hang with us!</p>
        </div>
        <div className='max-w-lg text-center text-xl mx-auto text-dark leading-10 mb-8'>
          Liking what you’re seeing so far? Join us on our Discord where you can chat with us and other members.
        </div>
        <p className='text-center mb-48'><a className="bg-white inline-flex text-black px-5 py-3 rounded-full font-ppagradir cursor-pointer leading-8 hover:transition-all hover:duration-500 hover:scale-110"><img src="/assets/images/discord-black.svg" alt="" className="mr-3" />Join the Discord</a></p>
      </div>
  </>;
}

const HomePage = () => (
  <Layout meta={
    <Meta
      title="Home - Taiki"
      description="Taiki Non Fungible tokens"
    />
  }>
    {header()}
    {funCollection()}
    {currentHolders()}
    {morePerks()}
    {taikiMap()}
    {faq()}
    {teamTaiki()}
    {hangWithUs()}
  </Layout>
)

export default HomePage

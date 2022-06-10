import React,{ useEffect, useState, useRef } from 'react';
import Layout from '../components/Layouts/Layout';
import Meta from '../components/Layouts/Meta';
import Accordion from '../components/accordion/accordion';
import NFTS from '../components/accordion/showNfts';
import ImageSlide from '../components/imageSlide';
import Header from '../components/Layouts/Header';
import { NextPage } from 'next';
import Image from 'next/image';

const HomePage:NextPage = () => {

  const whatIsTaikiFriendsRef = useRef<HTMLHeadingElement>(null);
  const taikiMapRef = useRef<HTMLHeadingElement>(null);
  const FaqRef = useRef<HTMLHeadingElement>(null);
  const taikiTeamRef = useRef<HTMLHeadingElement>(null);

  const whatIsTaikiFriendsScroll = () => {
    if (whatIsTaikiFriendsRef && whatIsTaikiFriendsRef.current) {
      whatIsTaikiFriendsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const taikiMapScroll = () => {
    if (taikiMapRef && taikiMapRef.current) {
      taikiMapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const FaqScroll = () => {
    if (FaqRef && FaqRef.current) {
      FaqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const taikiTeamScroll = () => {
    if (taikiTeamRef && taikiTeamRef.current) {
      taikiTeamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const topNavigation = () => {
    return (
      <>
          <div key={'desk-link-1'} className="px-5 py-3 bg-background md:p-0 flex flex-row gap-8">
            <li className="cursor-pointer list-none font-ppagradir text-[18px] hover:text-gray-100 transition-all duration-500 hover:scale-110" onClick={whatIsTaikiFriendsScroll}>What is Taiki Friends?</li>
          </div>
          <li className="hidden md:block">/</li>
          <div key={'desk-link-2'} className="px-5 py-3 bg-background md:p-0 flex flex-row gap-8">
            <li className="cursor-pointer list-none font-ppagradir text-[18px] hover:text-gray-100 transition-all duration-500 hover:scale-110" onClick={taikiMapScroll}>Taiki Map</li>
          </div>
          <li className="hidden md:block">/</li>
          <div key={'desk-link-3'} className="px-5 py-3 bg-background md:p-0 flex flex-row gap-8">
            <li className="cursor-pointer list-none font-ppagradir text-[18px] hover:text-gray-100 transition-all duration-500 hover:scale-110" onClick={FaqScroll}>FAQ</li>
          </div>
          <li className="hidden md:block">/</li>
          <div key={'desk-link-4'} className="px-5 py-3 bg-background md:p-0 flex flex-row gap-8">
            <li className="cursor-pointer list-none font-ppagradir text-[18px] hover:text-gray-100 transition-all duration-500 hover:scale-110" onClick={taikiTeamScroll}>Taiki Team</li>
          </div>
      </>
    );
  }

  const headerSection = () => {
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
          <div className='mx-auto mb-16 text-center'>
            <Image src="/logo.svg" height={150} width={500} alt="Taiki" priority={true} />
          </div>
          <p className='font-ppagradir !text-[21px] text-center max-w-sm mx-auto font-thin text-dark mb-12 relative z-20'>Your friendly NFT collection for shiba inu lovers and lofi hip-hop enthusiasts.</p>
          <p className='text-center mb-8'><a className="bg-white inline-flex text-black px-5 py-3 rounded-full cursor-pointer font-ppagradirNarrow leading-8 hover:bg-buttonHover transition ease-in-out duration-500 hover:scale-110"><Image src="/assets/images/discord-black.svg" height={30} width={30} alt="" />&nbsp;Join the Discord</a></p>
          <p className='font-ppagradir text-[18px] text-center max-w-sm mx-auto font-thin text-themeDark pb-24 relative z-20'>Launch Date: Around May 2022</p>
          <div className='hidden md:block absolute bottom-0 right-0 z-10' onClick={handleLamp}>
            <div className='absolute w-14 bottom-[67px] right-[138px]'>
              <Image src="/assets/images/smoke.gif" height={100} width={75} alt="smoke" priority={true} />
            </div>
            <div className='w-full relative bottom-[-7px]'>
              <Image src={lamp} alt="books and light" height={235} width={350} priority={true} />
            </div>
            <div className='bg-transparent cursor-pointer rounded-full h-5 w-5 absolute right-[38px] top-[165px]'></div>
          </div>
          <div className='hidden md:block absolute bottom-0 left-0 z-10'>
              <p className='absolute z-20 bottom-5 right-16 font-semibold text-sm'><a onClick={handlePlayer} className={playerActive?'mr-2 cursor-pointer':'mr-2 cursor-pointer text-gray-500'}>ON</a><a onClick={handlePlayer}   className={playerActive?'cursor-pointer text-gray-500':'cursor-pointer'}>OFF</a></p>
              <div className={playerActive?"w-[150px] absolute left-[63px] bottom-[200px]":"hidden"}>
                <Image src="/assets/images/music-playing.gif" alt="music symbols" height={200} width={200} priority={true} />
              </div>
              <div className='w-full relative bottom-[-6px]'>
                <Image src="/assets/images/music-player.svg" height={200} width={350} alt="books and light" priority={true} />
              </div>
          </div>
        </div>
        <NFTS />
      </>;
  }

  const funCollection = () => {
    return <>
      <div className='mx-auto max-w-5xl mt-16 relative px-4' ref={whatIsTaikiFriendsRef}>
          <div className='flex flex-col items-center py-16 md:space-x-[32px] md:flex-row md:justify-center'>
            <div className='flex-1 max-w-[30rem] mb-10 text-center md:text-left  md:mb-0 content-center font-ppagradirBold text-[38px] pr-5'>
              A fun collection for dog and music lovers.
            </div>
            <div className='flex-1 max-w-[30rem] text-center md:text-left flex items-center'>
              <p className='!text-[21px] text-dark leading-42 md:pl-[56px] font-ppagradir'>Taiki Friends is an NFT collection of 7,777 randomly generated super cute shiba inus living on the Ethereum blockchain.</p>
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-5xl relative mb-[32px] px-4'>
          <div className='flex flex-col items-center md:space-x-[32px] md:flex-row md:justify-center'>
            <div className='flex-1 max-w-[30rem] content-center mb-[32px] md:mb-[0px] bg-[#131A16] rounded-3xl overflow-hidden'>
              <p className='p-[26px] md:p-[56px] pb-[16px] font-ppagradirBold text-[30px]'><span className="text-[#00FF7E]">7,777</span><br />Randomly<br />Generated<br />Friends</p>
              <p className='px-[26px] md:px-[56px] pb-[16px] mb-5 text-dark leading-[36px] text-[18px] font-ppagradir'>Open your shiba basket to reveal a random combination of head traits, face traits, expressions, body traits, and backgrounds. Who knows what kind of friend you’ll get?</p>
              <div className="relative bottom-[-4px]">
                <Image src='/assets/images/7777-footer.png' height={240} width={480} alt='' priority={true} />
              </div>
            </div>
            <div className='flex-1 max-w-[30rem] content-center bg-[#141416] rounded-3xl overflow-hidden'>
              <p className='p-[26px] md:p-[56px] pb-[16px] font-ppagradirBold text-[30px]'><span className="super-rare">Super Rare</span><br />Collectible<br />1-of-1<br />Combinations</p>
              <p className='px-[26px] md:px-[56px] pb-[16px] mb-5 text-dark leading-[36px] text-[18px] font-ppagradir'>Have a chance to discover limited unique combinations that make your shiba inu avatar truly special and stand out from the rest.</p>
              <div className="relative bottom-[-4px]">
                <Image src='/assets/images/super-rare-footer.png' height={240} width={480} alt='' priority={true} />
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-5xl relative mb-16 px-4'>
          <div className='flex flex-col items-center md:space-x-[32px] md:flex-row md:justify-center'>
            <div className='flex-grow-1 max-w-[30rem] mb-[32px] md:mb-[0px] content-center bg-[#0F1B19] rounded-3xl overflow-hidden'>
              <p className='p-[26px] md:p-[56px] pb-[16px] font-ppagradirBold text-[30px]'><span className="animal-charity">Animal Charity</span><br />Contributions</p>
              <p className='px-[26px] md:px-[56px] pb-[16px] mb-5 text-dark leading-[36px] text-[18px] font-ppagradir'>Giving is a core part of our project. We plan to donate a percentage of our mint to help animal charities and charities that resonate with us and the community.</p>
              <div className="relative bottom-[-11px]">
                <Image src='/assets/images/animal-charity-footer.png' height={288} width={480} alt='' priority={true} />
              </div>
            </div>
            <div className='flex-grow-1 max-w-[30rem] content-center bg-[#191B13] rounded-3xl overflow-hidden'>
              <p className='p-[26px] md:p-[56px] pb-[16px] font-ppagradirBold text-[30px]'><span className="cool-exclusive">Cool Exclusive</span><br />Holder Perks</p>
              <p className='px-[26px] md:px-[56px] pb-[16px] mb-5 text-dark leading-[36px] text-[18px] font-ppagradir'>Gain exclusive holder perks as a Taiki Friends NFT holder. Private channels to chat with other holders, whitelist giveaways, sneak peeks, and more!</p>
              <div className="relative bottom-[-6px]">
                <Image src='/assets/images/holder-perks.svg' height={288} width={480} alt=''  priority={true} />
              </div>
            </div>
          </div>
        </div>
    </>;
  }

  const currentHolders = () => {
    return <>
        <div className='mx-auto max-w-7xl py-16 relative px-4'>
          <div className='max-w-3xl mx-auto mb-7'>
            <p className='font-ppagradirBold text-[46px] text-center'>Current Holder Perks</p>
          </div>
          <p className='text-base text-center text-dark mb-14 font-ppagradir !text-[21px]'>Amazing perks for planned for our holders.</p>
          <div className='flex flex-col gap-10 md:flex-row'>
              <div className='bg-[#1D1D16] p-10 flex-1 !rounded-[32px]'>
                <Image src="/assets/images/crown-gold.svg" height={40} width={40} className='mb-3' alt="" priority={true} />
                <p className='font-ppagradirBold text-[24px] mb-3'>
                  Whitelist<br />
                  Giveaways
                </p>
                <p className='text-dark leading-[36px] text-[18px] font-ppagradir'>Access weekly whitelist giveaways to other projects through our holder’s Discord channel</p>
              </div>
              <div className='bg-[#171F23] p-10 flex-1 !rounded-[32px]'>
              <Image src="/assets/images/voting-blue.svg" height={40} width={40}  className='mb-3' alt="" priority={true} />
                <p className='font-ppagradirBold text-[24px] mb-3'>
                  Voting &amp; Decision-<br />
                  Making
                </p>
                <p className='text-dark leading-[36px] text-[18px] font-ppagradir'>Influence roadmap decisions through voting polls, feedback, and other democratic means.</p>
              </div>
              <div className='bg-[#1c221c] p-10 flex-1 !rounded-[32px]'>
              <Image src="/assets/images/bear-smile-green.svg" height={40} width={40}  className='mb-3' alt="" priority={true} />
                <p className='font-ppagradirBold text-[24px] mb-3'>
                  Exclusive Sneak<br />
                  Peeks
                </p>
                <p className='text-dark leading-[36px] text-[18px] font-ppagradir'>Get regular exclusive updates on our project status, progress, trait updates, and more!</p>
              </div>
          </div>
        </div>
    </>;
  }

  const morePerks = () => {
    return <>
      <div className='mx-auto max-w-7xl pt-16 relative px-4'>
          <div className='flex justify-center mb-5'>
            <div className='flex-shrink-1 self-center'>
              <Image src="/assets/images/sparkle-grey.svg" height={25} width={25} alt="" priority={true} />
            </div>
            <div className='flex-grow-0 text-center text-dark px-5 font-ppagradirBold !text-[24px]'>
              More Perks to be<br />Announced!
            </div>
            <div className='flex-shrink-1 self-center'>
             <Image src="/assets/images/sparkle-grey.svg" height={25} width={25} alt="" priority={true} />
            </div>
          </div>
          <p className='text-base !text-[21px] font-ppagradir text-center text-dark mb-20'>Stay updated via our <span className='text-white underline'>Discord.</span> </p>
        </div>
        <div className='bg-background mb-16'>
          <ImageSlide />
        </div>
    </>;
  }

  const taikiMap = () => {
    return <>
        <div className='mx-auto max-w-7xl relative pt-16 relative px-4' ref={taikiMapRef}>
          <div className='max-w-3xl mx-auto mb-7'>
            <p className='font-ppagradirBold text-[46px] text-center'>The Taiki Map</p>
          </div>
          <p className='text-base text-center font-ppagradir text-dark mb-14 font-ppagradir !text-[21px]'>The current tentative roadmap for Taiki Friends.</p>
          <div className='flex flex-col flex-1 h-full md:flex-row items-center md:justify-center md:space-x-[32px] mb-[32px]'>
            <div className='flex-1 w-full max-w-[36rem] content-center mb-[32px] md:mb-[0] bg-darkBlue rounded-[32px] relative overflow-hidden'>
              <div className='bg-[#365685] p-5 m-12 mb-8 rounded-[32px] flex gap-3 sm:gap-7 align-middle'>
                <div className='bg-darkBlue h-20 w-20 text-center flex justify-center items-center text-[40px] rounded-full font-ppagradirBold flex-shrink-0'>1</div>
                <div className='font-ppagradirBold max-w-[330px] flex items-center text-[14px] sm:text-[24px]'>X% of Mint Back into the Project</div>
              </div>
              <p className='px-12 text-[18px] leading-[36px] mb-14 font-ppagradir text-[#DBDBDB] relative z-10'>After launch, a large sum of our mint capital will be refinanced back into our project to fund the future development of our roadmap.</p>
              <div className='absolute right-0 bottom-[-6px]'>
                <Image src='/assets/images/dollar-sign.png' height={125} width={125} alt='' priority={true} />
              </div>
            </div>
            <div className='flex-1 w-full  h-full max-w-[36rem] content-center bg-darkGreen rounded-[32px] relative overflow-hidden'>
              <div className='bg-[#397E40] p-5 m-12 mb-8 rounded-[32px] flex gap-3 sm:gap-7 align-middle'>
                <div className='bg-[#256B2C] h-20 w-20 text-center text-[40px] flex items-center justify-center rounded-full font-ppagradirBold flex-shrink-0'>2</div>
                <div className='font-ppagradirBold max-w-[330px] flex items-center  text-[14px] sm:text-[24px]'>Untitled Points- Based Game</div>
              </div>
              <p className='px-12 text-[18px] leading-[36px] mb-14 font-ppagradir text-[#DBDBDB] relative z-10'>Let the games begin! Collect Taiki points to win rewards such as ultra-rare Taikis, Taiki-themed isometric web3 rooms, and so much more!</p>
              <div className='absolute right-0 bottom-[-6px]'>
                <Image src='/assets/images/numbers.png' height={125} width={125} alt='' priority={true} />
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl relative mt-[32px] mb-12 px-4'>
        <div className='flex flex-col md:flex-row items-center md:justify-center md:space-x-[32px]'>
            <div className='flex-1 w-full max-w-[36rem] content-center mb-[32px] md:mb-[0] bg-darkRed rounded-[32px] relative overflow-hidden'>
              <div className='bg-[#AA4537] p-5 m-12 mb-8 rounded-[32px] flex gap-3 sm:gap-7 align-middle'>
                {/* <div className='bg-[#9B1724] h-16 w-16 text-center pt-2 text-[32px] rounded-full font-ppagradirBold flex-shrink-0'>3</div> */}
                <div className='bg-darkRed h-20 w-20 text-center flex justify-center items-center text-[40px] rounded-full font-ppagradirBold flex-shrink-0'>3</div>
                <div className='font-ppagradirBold max-w-[330px] flex items-center text-[14px] sm:text-[24px]'>Online Taiki Tamagotchi</div>
              </div>
              <p className='px-12 text-[18px] leading-[36px] mb-14 font-ppagradir text-[#DBDBDB] relative z-10'>Bring back the nostalgia. Take care of your Taiki in his virtual tamagotchi space. Feed him lollipops, play catch, give him a shower. Trade items with others.</p>
              <div className='absolute right-0 bottom-[-6px]'>
                <Image src='/assets/images/calc.png' height={125} width={125} alt='' priority={true} />
              </div>
            </div>
            <div className='flex-1 w-full max-w-[36rem] content-center bg-darkYellow rounded-[32px] relative overflow-hidden'>
              <div className='bg-[#B39337] p-5 px-3 m-12 mb-8 rounded-[32px] flex items-center gap-3 sm:gap-7 align-middle'>
                <div className='bg-[#A17608] h-20 w-20 text-center flex items-center justify-center text-[40px] rounded-full font-ppagradirBold flex-shrink-0'>4</div>
                <div className='font-ppagradirBold max-w-[330px] text-[14px] sm:text-[24px]'>Taikiverse + Future Partnerships</div>
              </div>
              <p className='px-12 text-[18px] leading-[36px] mb-14 font-ppagradir text-[#DBDBDB] relative z-10'>Dive into our web3 social community game where holders can gather to chat, listen to music, and play fun minigames together!</p>
              <div className='absolute right-0 bottom-[-6px]'>
                <Image src='/assets/images/smiley.png' height={125} width={125} alt='' priority={true} />
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-lg font-ppagradir !text-[21px] text-dark leading-10 relative mt-12 mb-16 text-center'>We’re constantly working to refine and improve our roadmap. Keep up with the progress here.</div>
    </>;
  }

  const faq = () => {
    return <>
      <div className='mx-auto max-w-7xl py-16 relative md:px-5 overflow-hidden' ref={FaqRef}>
        <div className='max-w-2xl mx-auto mb-32'>
          <p className='font-ppagradirBold text-[46px] text-center'>You have questions? We have answers.</p>
        </div>
        <div className='mx-auto max-w-5xl relative mt-12 mb-12 px-5 md:px-0'>
          <Accordion title="What are NFTs?" open={true} content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
          <Accordion title="What’s so special about Taiki Friends?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
          <Accordion title="What is the release date of the collection?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
          <Accordion title="What charities will you be donating to?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        </div>
        <div className='text-center !text-[21px] font-ppagradir mx-auto text-dark leading-10 mt-8 mb-8'>
          Have a question that’s not on this list? <span className='text-white underline'>Ask us directly</span> on our Discord.
        </div>
      </div>
    </>;
  }

  const teamTaiki = () => {
    return <>
      <div className='mx-auto max-w-7xl py-16 relative px-4' ref={taikiTeamRef}>
          <div className='max-w-sm mx-auto mb-20'>
            <p className='font-ppagradirBold text-[46px] text-center'>Team Taiki</p>
          </div>
          <div className='flex flex-col items-center md:justify-center space-x-10 md:flex-row'>
            <div>
              <Image src="/assets/images/acornzzi.png" height={256} width={256} alt='' priority={true} />
              <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>acornzzi</p>
              <p className='text-base text-center text-dark mt-3 font-ppagradir'>Artist</p>
            </div>
            <div>
              <Image src="/assets/images/fr1nge.png" height={256} width={256} alt='' priority={true} />
              <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>fr1nge</p>
              <p className='text-base text-center text-dark mt-3 font-ppagradir'>Founder</p>
            </div>
            <div>
              <Image src="/assets/images/kazi.png" height={256} width={256} alt='' priority={true} />
              <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>kazi</p>
              <p className='text-base text-center text-dark mt-3 font-ppagradir'>Digital Designer/Product</p>
            </div>
            <div>
              <Image src="/assets/images/leon.png" height={256} width={256} alt='' priority={true} />
              <p className='text-[24px] text-center text-white mt-3 font-ppagradirBold'>Leon</p>
              <p className='text-base text-center text-dark mt-3 font-ppagradir'>Management</p>
            </div>
          </div>
        </div>
    </>;
  }

  const hangWithUs = () => {
    return <>
      <div className='mx-auto max-w-7xl pt-16 relative px-4'>
          <div className='max-w-2xl mx-auto mb-8'>
            <p className='font-ppagradirBold text-[46px] text-center'>Come hang with us!</p>
          </div>
          <div className='max-w-xl text-center font-ppagradir !text-[21px] mx-auto text-dark leading-[42px] mb-8'>
            Liking what you’re seeing so far? Join us on our Discord where you can chat with us and other members.
          </div>
          <p className='text-center mb-48'><a className="bg-white inline-flex text-black px-5 py-3 rounded-full font-ppagradir cursor-pointer leading-8 transition-all duration-500 hover:bg-buttonHover hover:scale-110"><Image src="/assets/images/discord-black.svg" alt="" height={30} width={30} />&nbsp;Join the Discord</a></p>
        </div>
    </>;
  }

  return (<Layout meta={
    <Meta
      title="Home - Taiki"
      description="Taiki Non Fungible tokens"
    />
  } header={<Header publicMenu={topNavigation()} />}>
    {headerSection()}
    {funCollection()}
    {currentHolders()}
    {morePerks()}
    {taikiMap()}
    {faq()}
    {teamTaiki()}
    {hangWithUs()}
  </Layout>);
};

export default HomePage

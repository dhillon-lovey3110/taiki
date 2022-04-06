import { useState } from 'react';
import Layout from '../components/Layouts/Layout';
import Meta from '../components/Layouts/Meta';
import Accordion from '../components/accordion/accordion';
import NFTS from '../components/accordion/showNfts';

const header = () => {
    const [playerActive,setPlayerActive] = useState(false);

    return <>
      <div className='mx-auto max-w-7xl relative'>
        <img src="/assets/images/taiki.png" className='mx-auto mb-16' alt="Taiki" />
        <p className='font-agradir text-xl text-center max-w-sm mx-auto font-thin text-gray-400 mb-12'>Your friendly NFT collection for shiba inu lovers and lofi hip-hop enthusiasts.</p>
        <p className='text-center mb-8'><a className='bg-white text-black text-2xl rounded-full inline-block px-8 py-3 mb-3 cursor-pointer'><img src="/assets/images/discord-join.png" className='inline-block' alt="" /></a></p>
        <p className='font-agradir text-lg text-center max-w-sm mx-auto font-thin text-gray-400 pb-24'>Launch Date: Around May 2022</p>
        <div className='absolute bottom-0 right-0'>
           <img src="/assets/images/books_and_light.png" alt="books and light" className='w-full' />
        </div>
        <div className='absolute bottom-0 left-0'>
            <p className='absolute bottom-5 right-16 font-semibold text-sm'><a onClick={() => {setPlayerActive(true)}} className={playerActive?'mr-2 cursor-pointer':'mr-2 cursor-pointer text-gray-500'}>ON</a><a onClick={() => {setPlayerActive(false)}} className={playerActive?'cursor-pointer text-gray-500':'cursor-pointer'}>OFF</a></p>
           <img src="/assets/images/music_player.png" alt="books and light" className='w-full' />
        </div>
      </div>
      <div className='border-b-8 border-b-dark mb-2'></div>
      <ul className=''>
        <NFTS url="/assets/images/nfts/2.png" />
        <NFTS url="/assets/images/nfts/4.png" />
        <NFTS url="/assets/images/nfts/36.png" />
        <NFTS url="/assets/images/nfts/37.png" />
        <NFTS url="/assets/images/nfts/244.png" />
      </ul>
      <div className='border-b-8 border-b-dark'></div>
    </>;
}

const funCollection = () => {
  return <>
    <div className='mx-auto max-w-5xl relative'>
        <div className='flex flex-row justify-center py-16'>
          <div className='flex-grow-1 p-10 content-center'>
            <img src='/assets/images/fun-collection.png' alt='' />
          </div>
          <div className='flex-grow-1 p-10 flex items-center'>
            <p className='max-w-sm text-xl text-dark'>Taiki Friends is an NFT collection of 7,777 randomly generated super cute shiba inus living on the Ethereum blockchain.</p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-5xl relative mb-16'>
        <div className='flex flex-row justify-center gap-10'>
          <div className='flex-grow-1 max-w-md content-center bg-gray-800 rounded-2xl'>
            <img src='/assets/images/7777-friends.png' className='p-8 h-56' alt='' />
            <p className='px-8 text-sm mb-5 text-dark'>Open your shiba basket to reveal a random combination of head traits, face traits, expressions, body traits, and backgrounds. Who knows what kind of friend you’ll get?</p>
            <img src='/assets/images/7777-footer.png' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-gray-800 rounded-2xl'>
            <img src='/assets/images/super-rare.png' className='p-8 h-56' alt='' />
            <p className='px-8 mb-5 text-sm text-dark'>Have a chance to discover limited unique combinations that make your shiba inu avatar truly special and stand out from the rest.</p>
            <img src='/assets/images/super-rare-footer.png' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl relative mb-12'>
        <div className='flex flex-row justify-center gap-10'>
          <div className='flex-grow-1 max-w-md content-center bg-gray-800 rounded-2xl'>
            <img src='/assets/images/animal-charity.png' className='p-8 h-40' alt='' />
            <p className='px-8 text-sm mb-5 text-dark'>Giving is a core part of our project. We plan to donate a percentage of our mint to help animal charities and charities that resonate with us and the community.</p>
            <img src='/assets/images/animal-charity-footer.png' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-gray-800 rounded-2xl'>
            <img src='/assets/images/cool-exclusive.png' className='p-8 h-40' alt='' />
            <p className='px-8 mb-5 text-sm text-dark'>Gain exclusive holder perks as a Taiki Friends NFT holder. Private channels to chat with other holders, whitelist giveaways, sneak peeks, and more!</p>
            <img src='/assets/images/cool-exclusive-footer.png' alt='' />
          </div>
        </div>
      </div>
  </>;
}

const currentHolders = () => {
  return <>
      <div className='mx-auto max-w-7xl mt-36 relative'>
        <div className='max-w-2xl mx-auto mb-7'>
          <img src="/assets/images/current-holder-perks.png" alt="" />
        </div>
        <p className='text-base text-center text-dark mb-10'>Amazing perks for planned for our holders.</p>
        <div className='flex flex-row gap-10'>
            <div className='bg-gray-800 p-10 flex-1 rounded-2xl'>
              <img src="/assets/images/giveaways.png" alt='' className='mb-5 w-96' />
              <p className='text-dark'>Access weekly whitelist giveaways through our holder’s Discord channel.</p>
            </div>
            <div className='bg-gray-800 p-10 flex-1 rounded-2xl'>
              <img src="/assets/images/voting.png" alt='' className='mb-5 w-96' />
              <p className='text-dark'>Influence roadmap decisions through voting polls, feedback, and other democratic means.</p>
            </div>
            <div className='bg-gray-800 p-10 flex-1 rounded-2xl'>
              <img src="/assets/images/exclusive.png" alt='' className='mb-5 w-96' />
              <p className='text-dark'>Get regular exclusive updates on our project status and progress.</p>
            </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl mt-36 relative'>
        <div className='max-w-sm mx-auto mb-7'>
          <img src="/assets/images/more-perks.png" alt=""  />
        </div>
        <p className='text-base text-center text-dark mb-20'>Stay updated via our Discord.</p>
        <img src="/assets/images/nfts.png" alt='' />
      </div>
  </>;
}

const taikiMap = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative'>
        <div className='max-w-sm mx-auto mb-7'>
          <img src="/assets/images/taiki-map.png" alt=""  />
        </div>
        <p className='text-base text-center text-dark mb-20'>The current tentative roadmap for Taiki Friends.</p>
        <div className='flex flex-row justify-center gap-10'>
          <div className='flex-grow-1 max-w-md content-center bg-darkBlue rounded-2xl relative overflow-hidden'>
            <img src='/assets/images/x-percent.png' className='p-8 w-full' alt='' />
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>After launch, a large sum of our mint capital will be refinanced back into our project to fund the future development of our roadmap.</p>
            <img src='/assets/images/dollar-sign.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-darkGreen rounded-2xl relative overflow-hidden'>
            <img src='/assets/images/unlimited-points.png' className='p-8 w-full' alt='' />
            <p className='px-8 text-sm mb-5 text-dark relative z-10'>Let the games begin! Collect Taiki points to win rewards such as ultra-rare Taikis, Taiki-themed isometric web3 rooms, and so much more!</p>
            <img src='/assets/images/numbers.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl relative mt-12 mb-12'>
        <div className='flex flex-row justify-center gap-10'>
          <div className='flex-grow-1 max-w-md content-center bg-darkRed rounded-2xl relative overflow-hidden'>
            <img src='/assets/images/online-taiki.png' className='p-8 w-full' alt='' />
            <p className='px-8 text-sm mb-5 text-dark'>Bring back the nostalgia. Take care of your Taiki in his virtual tamagotchi space. Feed him lollipops, play catch, give him a shower. Trade items with others.</p>
            <img src='/assets/images/calc.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
          <div className='flex-grow-1 max-w-md content-center bg-darkYellow rounded-2xl relative overflow-hidden'>
            <img src='/assets/images/taikiverse.png' className='p-8 w-full' alt='' />
            <p className='px-8 mb-5 text-sm text-dark'>Dive into our web3 social community game where holders can gather to chat, listen to music, and play fun minigames together!</p>
            <img src='/assets/images/smiley.png' className='absolute right-0 bottom-0 w-[75px]' alt='' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-md relative mt-12 mb-12 text-center'>We’re constantly working to refine and improve our roadmap. Keep up with the progress here.</div>
  </>;
}

const faq = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative'>
      <div className='max-w-2xl mx-auto mb-32'>
        <img src="/assets/images/faq.png" alt=""  />
      </div>
      <div className='mx-auto max-w-5xl relative mt-12 mb-12'>
        <Accordion title="What the hell are NFTs?" open={true} content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What’s so special about Taiki Friends?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What is the release date of the collection?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
        <Accordion title="What charities will you be donating to?" content="NFTs stand for non-fungible tokens - items that have a one-of-a-kind value. Imagine I have a rooster and you have a duck. These are non-fungible things because they each have their own unique tradeable value. On the contrary, currency like US dollars are fungible because one dollar is the same as another one dollar. Get it?" />
      </div>
      <div className='text-center text-xl mx-auto text-dark leading-10 mt-8 mb-8'>
        Have a question that’s not on this list? Ask us directly on our Discord.
      </div>
    </div>
  </>;
}

const teamTaiki = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative'>
        <div className='max-w-sm mx-auto mb-20'>
          <img src="/assets/images/team-taiki.png" alt=""  />
        </div>
        <div className='flex flex-row justify-center gap-10'>
          <div>
            <img src="/assets/images/acornzzi.png" alt='' />
            <p className='text-base text-center text-dark mt-3'>Artist</p>
          </div>
          <div>
            <img src="/assets/images/fr1nge.png" alt='' />
            <p className='text-base text-center text-dark mt-3'>Founder</p>
          </div>
          <div>
            <img src="/assets/images/kazi.png" alt='' />
            <p className='text-base text-center text-dark mt-3'>Digital Designer/Product</p>
          </div>
          <div>
            <img src="/assets/images/leon.png" alt='' />
            <p className='text-base text-center text-dark mt-3'>Management</p>
          </div>
        </div>
      </div>
  </>;
}

const hangWithUs = () => {
  return <>
    <div className='mx-auto max-w-7xl mt-36 relative'>
        <div className='max-w-xl mx-auto mb-8'>
          <img src="/assets/images/hang-with-us.png" alt=""  />
        </div>
        <div className='max-w-lg text-center text-xl mx-auto text-dark leading-10 mb-8'>
          Liking what you’re seeing so far? Join us on our Discord where you can chat with us and other members.
        </div>
        <p className='text-center mb-48'><img src="/assets/images/discord-join.png" className='mx-auto cursor-pointer' alt='' /></p>
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
    {/* {header()} */}
    {funCollection()}
    {currentHolders()}
    {taikiMap()}
    {faq()}
    {teamTaiki()}
    {hangWithUs()}
  </Layout>
)

export default HomePage

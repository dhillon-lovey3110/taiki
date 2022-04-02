export default function Header() {
  return (
    <>
      <div className="flex-grow">
        <div className='mx-auto max-w-7xl my-16'>
          <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row flex-shrink-0">
                  <a href="https://twitter.com" aria-label="twitter" target="_blank" className="mr-4" ><img src="/assets/images/twitter.png" alt="" /></a>
                  <a href="https://discord.com" aria-label="discord" target="_blank"><img src="/assets/images/discord.png" alt="" /></a>
              </div>
              <div className="flex flex-row flex-grow-1 px-5">
                  <ul className="inline-flex gap-7 text-gray-500">
                    <li className="cursor-pointer hover:text-gray-100">What is Taiki Friends?</li>
                    <li className="hidden md:block">/</li>
                    <li className="cursor-pointer hover:text-gray-100">Taiki Map</li>
                    <li className="hidden md:block">/</li>
                    <li className="cursor-pointer hover:text-gray-100">FAQ</li>
                    <li className="hidden md:block">/</li>
                    <li className="cursor-pointer hover:text-gray-100">Taiki Team</li>
                  </ul>
              </div>
              <div className="flex flex-row flex-shrink-0">
                <img src="/assets/images/wallet.png" alt="" className="cursor-pointer" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
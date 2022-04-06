import { Navbar, menuLinks, walletLinks } from "./navbar";
export default function Header() {
  return (
    <>
      <div className="flex-grow">
        <div className='mx-auto max-w-7xl my-16'>
          <div className="flex flex-row justify-between items-center mx-5">
              <div className="flex flex-row flex-shrink-0">
                  <a href="https://twitter.com" aria-label="twitter" target="_blank" className="mr-4" ><img src="/assets/images/twitter.png" alt="" /></a>
                  <a href="https://discord.com" aria-label="discord" target="_blank"><img src="/assets/images/discord.png" alt="" /></a>
              </div>
              <Navbar />
              <div className="hidden md:flex md:flex-row md:flex-grow-1 px-5">
                  <ul className="inline-flex gap-7 text-gray-500">
                    {menuLinks.map( (v,i) => {
                      return <div key={'desk-link-'+i} className="flex flex-row gap-8">
                        <li className="cursor-pointer hover:text-gray-100">{v.title}</li>
                        {(i!=menuLinks.length-1)&&<li className="">/</li>}
                      </div>;
                    })}
                  </ul>
              </div>
              <div className="hidden md:flex md:flex-row md:flex-shrink-0">
                {walletLinks.map( (v,i) => {
                  return <div key={"wallet-"+i} >
                    {v.image!=''&&<img src={v.image} alt={v.title} className="cursor-pointer" />}
                  </div>;
                } )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
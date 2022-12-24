import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Tutorial from '../components/Tutorial/tutorial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageList from '../components/Tutorial/imagelist';

const Tutorials = () => {

  return (
    <div className="relative h-screen overflow-x-hidden bg-bg-light font-[Montserrat] text-text-light dark:bg-bg-dark dark:text-text-dark">
      <Head>
        <title>Crypto Swap</title>
        <meta name="description" content="Crypto Swap is a very efficient simple DEX on zkSync (Swap, Pool, Liquidity Options, and Generate). No presale, fully decentralized, and community-driven." />
        <meta key="twitter:description" name="twitter:description" content="Crypto Swap" />
        <link rel="icon" href="/icons/black_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://cryptoswap.org" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="relative h-[95vh] w-screen flex items-center justify-center mx-auto">


        <div className="absolute z-10 -mt-48 max-w-xs flex flex-col space-y-10 place-items-center font-[Montserrat] p-5 py-10 rounded-[64px] shadow-card dark:shadow-card-dark">
          <h1 className='text-3xl font-semibold leading-9 text-center'>
            Crypto swaps <br></br> are easy here.
          </h1>

          <button className="  bg-font-blue hover:bg-button-blue text-text-dark font-bold py-2 px-4 rounded-full text-base w-9/12 dark:bg-button-blue dark:hover:bg-font-blue shadow-blue-button hover:shadow-blue-button-hover">
            <a href="#tutorial">
              Get Started
            </a>
          </button>
        </div>

        <div className="absolute z-0 h-full w-full">
          <ImageList />
        </div>

      </div>

      <div id={'tutorial'} className="relative flex flex-col items-center justify-center place-items-center pt-5 pb-24
      bg-gradient-to-b from-[#DAE3F8] to-[#9FA1E8] dark:from-[#141432] dark:to-[#33274B]" >
        <Tutorial />
      </div>

      <div className="mb-16"></div>
      <Footer />
    </div>
  );
};

export default Tutorials;

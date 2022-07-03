import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
      <div className="relative h-screen overflow-x-hidden bg-bg-light font-[Montserrat] text-text-light dark:bg-bg-dark dark:text-text-dark">
        <Head>
          <title>CryptoSwap</title>
          <meta name="description" content="CryptoSwap is a very efficient simple DEX on zkSync (Swap, Pool, Liquidity Options, and Generate). No presale, fully decentralized, and community-driven." />
          <meta key="twitter:description" name="twitter:description" content="CryptoSwap" />
          <link rel="icon" href="/icons/black_logo.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://cryptoswap.org" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
  
        <Navbar />
  
        <div>
            <button>
                <Link href='https://zksync.cryptoswap.org'>
                    Click this text to access zkSync Crypto Swap 
                </Link>
            </button>
        </div>

        <Footer />
      </div>
    );
  };
  
  export default Home;
  
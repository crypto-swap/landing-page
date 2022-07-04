import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Homepage.module.scss'

const style = {
  wrapper : 'p-8 box-border',
  row1 : 'flex justify-center items-center flex-col gap-10',
  zksyncButton : 'bg-[rgb(96,9,240)] bg-gradient-to-r from-[rgba(96,9,240,1)] to-[rgba(129,5,240,1)] p-5 rounded-2xl shadow-purple-gradient-button hover:shadow-purple-gradient-button-hover',
  buttonText: 'relative block h-full w-full text-white',
  animationWrapper : 'flex justify-center items-center flex-row flex-wrap mt-5',
  cryptoswapContainer: 'flex justify-center items-center w-full h-full flex-col p-10 gap-1',
  starknetContainer: 'flex justify-center items-center w-full h-full flex-col p-10 gap-2',
  zksyncContainer: 'flex justify-center items-center w-full h-full flex-col p-10',
  topText: 'text-3xl text-white',
  csText: 'text-2xl text-white',
}

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

      <div className={style.wrapper}>
        
        <div className={style.row1}>

          <Link href='https://zksync.cryptoswap.org'>
            <button className={style.zksyncButton}>
              <span className={style.buttonText}>
                Click this button to access zkSync Crypto Swap 
              </span>
            </button>
          </Link>

          <div className={styles.cube}>
            <div className={styles.top}>

            </div>
            <div>
              <span style={{"--i": 0} as React.CSSProperties}>              
                <div className={style.zksyncContainer}>
                <img className={styles.logo} src='https://cryptoswap.org/network_icons/zksync_logo.svg'></img>
                <text className={style.topText}>zkSync</text>
                </div>
              </span>
              <span style={{"--i": 1} as React.CSSProperties}>              
                <div className={style.cryptoswapContainer}>
                <img className={styles.logo} src='https://cryptoswap.org/icons/black_logo.svg'></img>
                <text className={style.csText}>CryptoSwap</text>
                </div>
              </span>
              <span style={{"--i": 2} as React.CSSProperties}>              
                <div className={style.starknetContainer}>
                  <img className={styles.logo} src='https://cryptoswap.org/network_icons/starknet_logo.png'></img>
                  <text className={style.csText}>StarkNet</text>
                </div>
              </span>
              <span style={{"--i": 3} as React.CSSProperties}>              
                <div className={style.cryptoswapContainer}>
                <img className={styles.logo} src='https://cryptoswap.org/icons/black_logo.svg'></img>
                <text className={style.csText}>CryptoSwap</text>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

  export default Home;
  
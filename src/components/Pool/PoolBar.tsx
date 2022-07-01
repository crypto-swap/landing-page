import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import internal from 'stream';


interface PoolBarProps {
    key: string;
    image1: string;
    image2: string;
    ticker1: string;
    ticker2: string;
    liquidity: number;
    volume: number;
    fees: string;
    apr: string;
}

const PoolBar = ({ image1, image2, ticker1, ticker2, liquidity, volume, fees, apr }: PoolBarProps) => {
    return (
        <Link href="/add">
            <div className="font-[Montserrat] text-[0.6rem] cursor-pointer select-none md:p-0 md:text-base h-12 md:max-width mt-4 overflow-hidden rounded-lg shadow-card 
                            bg-bg-card-light dark:bg-bg-card-dark hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6 ">

                <div className="col-span-2 grid grid-cols-3 text-left gap-x-0.5 pl-2">
                    <div className="flex justify-center gap-x-0.5 lg:gap-x-2">
                        <Image src={image1} width={25} height={25} />
                        <Image src={image2} width={25} height={25} />
                    </div>
                    <div className="flex flex-col justify-center col-span-2">
                        {ticker1.substring(0, 3)}-{ticker2.substring(0, 3)}
                    </div>

                </div>
                <div className="flex flex-col justify-center text-right">
                    ${liquidity}
                </div>
                <div className="flex flex-col justify-center text-right">
                    ${volume}
                </div>
                <div className="flex flex-col justify-center text-right">
                    ${fees}
                </div>
                <div className="flex flex-col justify-center text-right pr-2 md:pr-6 lg:pr-10 xl:pr-14">
                    {apr}%
                </div>

            </div>
        </Link>
    )
}

export default PoolBar

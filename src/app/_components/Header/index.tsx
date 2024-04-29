'use client'
import Link from 'next/link';
import React from 'react'
import { WalletButton } from '@rainbow-me/rainbowkit';
function Index() {
  return (
    <div className="md:flex bg-[#242020]">
      <div>
        <h1 className="md:m-5 m-5 md:ml-20 ml-15  font-Josefin font-bold leading-9 md:text-[28px] text-white">
          red <span className="text-[#DC1A1A]">Fireants</span>
        </h1>
      </div>
      <div className=" md:m-6 m-5 md:ml-20 ml-15 md:grow md:space-x-10 justify-center flex md:flex-none flex-col md:flex-row">
        <Link
          href={"/"}
          className="text-white font-Josefin active:text-[#DC1A1A] focus:text-[#DC1A1A] focus:underline underline-offset-8"
        >
          Home
        </Link>
        <Link
          href={"/airdrop"}
          className="text-white font-Josefin active:text-[#DC1A1A] focus:text-[#DC1A1A] focus:underline underline-offset-8"
        >
          Airdrop
        </Link>
        <Link
          href={"/rules"}
          className="text-white font-Josefin active:text-[#DC1A1A] focus:text-[#DC1A1A] focus:underline underline-offset-8"
        >
          Rules
        </Link>
        <Link
          href={"/portfolio"}
          className="text-white font-Josefin active:text-[#DC1A1A] focus:text-[#DC1A1A] focus:underline underline-offset-8"
        >
          Portfolio
        </Link>
      </div>
      <div className=" mt-3 mr-4 grow-0 flex-none">
        <button className="text-white font-Josefin bg-[#F1A7A7] w-[156px] h-[49px] rounded-[28px]">
          <WalletButton.Custom wallet="metamask">
            {({ ready, connect }) => {
              return (
                <button
                  type="button"
                  className="text-white font-Josefin h-1"
                  onClick={connect}
                >
                  CONNECT WALLET
                </button>
              );
            }}
          </WalletButton.Custom>
        </button>
      </div>
    </div>
  );
}

export default Index
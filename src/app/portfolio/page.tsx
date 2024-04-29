'use client'
import React from 'react'
import Header from "../_components/Header"
import { WalletButton } from '@rainbow-me/rainbowkit';
function Page() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="md:w-[740px] md:h-[577px] bg-[#1F212A] mt-8">
          <h1 className="font-Josefin text-white text-center mt-5">
            Youre Account Datas
          </h1>
          <div className="flex">
            <div className="md:w-[493px] md:h-[337px] bg-[#D9D9D9] ml-16 mt-16">
              <p className=" font-Josefin mt-5 ml-10">
                List with Rows and columns
                <br />
                {JSON.stringify("<date> <Airdrop Token> <Total>")}
              </p>
            </div>
            <div className='mt-20'>
              <button className="text-white bg-[#F1A7A7] font-Josefin leading-4 p-4 border-[1px] rounded-2xl ml-5">
                Claim
              </button>
            </div>
          </div>
          <div className="flex justify-end mr-8 mt-14">
            <WalletButton.Custom wallet="rainbow">
              {({ ready, connect }) => {
                return (
                  <button
                    type="button"
                    className="text-white bg-[#F1A7A7] font-Josefin leading-4 p-4 border-[1px] rounded-2xl ml-5"
                    onClick={connect}
                  >
                    <span className="mt-3 ml-2">DISCONNECT</span>
                  </button>
                );
              }}
            </WalletButton.Custom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page
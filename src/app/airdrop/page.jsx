/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Header from '../_components/Header'
import Image from 'next/image';
import Image2 from '../images/rant.png'
import { useState } from 'react';
import Icon from '../images/image 21416.png'
import Icon2 from '../images/image _21415.png'
import Icon3 from "../images/image21415.png"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { WalletButton } from "@rainbow-me/rainbowkit";
function Airdrop() {
  const [activeTab, setActiveTab] = useState("ant");
  const Ant=()=>{
    return (
      <div className="md:w-[740px] h-[458px] flex justify-center rounded-lg bg-[#1F212A]">
        <div className="space-y-8">
          <Image src={Image2} alt="Icon" className="md:ml-[100px]" />
          <h1 className="text-center text-white font-Josefin text-[36px] font-[500px] leading-[44px]">
            log in to participate
          </h1>
          <WalletButton.Custom wallet="metamask">
            {({ ready, connect }) => {
              return (
                <button
                  type="button"
                  className="text-white font-Josefin leading-4 p-4 border-[1px] rounded-2xl"
                  onClick={connect}
                >
                  <div className="flex">
                    <Image src={Icon2} alt='icon'></Image>
                    <span className="mt-3">CONNECT METAMASK</span>
                  </div>
                </button>
              );
            }}
          </WalletButton.Custom>
          <WalletButton.Custom wallet="rainbow">
            {({ ready, connect }) => {
              return (
                <button
                  type="button"
                  className="text-white font-Josefin leading-4 p-4 border-[1px] rounded-2xl ml-5"
                  onClick={connect}
                >
                  <div className="flex">
                    <Image src={Icon3} alt='icon'></Image>
                    <span className="mt-3 ml-2">CONNECT WALLET</span>
                  </div>
                </button>
              );
            }}
          </WalletButton.Custom>
        </div>
      </div>
    );
  }
    const BEP = () => {
      return <h1>BEP-20</h1>;
    };
  const data = [
    {
      label: (
        <p className="text-white">
          r<span className="text-red-700 font-Josefin font-bold">Ants</span>{" "}
          Airdrop
        </p>
      ),
      value: "ant",
      desc: <Ant />,
    },
    {
      label: (
        <div className='flex'>
          <Image src={Icon} alt='icon' width={30} height={30}/>
          <p className='text-white mt-1 ml-1'>BEP-20</p>
        </div>
      ),
      value: "bep",
      desc: <BEP />,
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-10">
        <Tabs value={activeTab}>
          <div className='flex justify-center'>
            <TabsHeader
              className="rounded-3xl border-[1px] md:w-[355px] border-white bg-black"
              indicatorProps={{
                className: " bg-[#1F212A]  border-2 border-white rounded-3xl",
              }} 
>
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "" : ""}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default Airdrop
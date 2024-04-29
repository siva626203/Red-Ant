/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from '../_components/Header'
function Pages() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-10">
        <div className="md:w-[740px] h-[458px] flex justify-center rounded-lg bg-[#1F212A]">
          <div>
            <p className="text-white text-center mt-5 font-Josefin">
              r<span className="text-red-700 font-Josefin font-bold">Ants</span>{" "}
              Airdrop
            </p>
            <p className="text-white mt-8 px-16 font-Josefin">
              Users with rAnts token participation automatically take part in
              the "Airdrop" campaign. This requires a connection to your wallet
              client. <br />
              Once a connection has been established, you can see your rAnts
              token count and claim your shares on the "Portfolio" page.
              <br />
              Our Airdrop function allows us to promote natural community
              growth.
            </p>
            <p className="text-red-800 px-16 font-Josefin font-semibold mt-5">
              current payouts:
            </p>
            <div className="w-[600px] bg-blue-gray-50 h-[180px] mx-16 mt-5">
              <div className="flex space-x-[280px] pt-3">
                <h1 className="ml-5  font-Josefin">rAnts 0 to 1.000.000</h1>
                <h1 className=" font-Josefin">25% per week</h1>
              </div>
              <div className="flex space-x-[215px] pt-3">
                <h1 className="ml-5 font-Josefin">
                  rAnts 1.000.001 to 10.000.000
                </h1>
                <h1 className=" font-Josefin">20% per week</h1>
              </div>
              <div className="flex pt-3 space-x-[195px]">
                <h1 className="ml-5 font-Josefin">
                  rAnts 10.000.001 to 100.000.000
                </h1>
                <h1 className="font-Josefin">10% per week</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages
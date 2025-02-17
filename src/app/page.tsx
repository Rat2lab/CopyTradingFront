import React from "react";
import Link from "next/link";

import { MyBarChart } from "@/components/MyBarChart";
import { MyRadarChart } from "@/components/MyRadarChart";
import { MyPieChart } from "@/components/MyPieChart";
import { GearIcon, Share2Icon, ShuffleIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import LoginButton from "@/components/loginButton";

const RadarFakeData = [
  {
    subject: "Purchase",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Sell",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Swap",
    A: 33,
    fullMark: 100,
  },
];

const landing = () => {
  return (
    <main className="w-full h-screen flex flex-col gap-0 md:gap-8 md:justify-between columns-2 ">
      <div className="w-full flex flex-col items-center gap-10 justify-center md:bg-white md:text-black">
        <img
          src="/favicon1024x1024.ico"
          alt="CryptoFolio.me"
          className="h-32"
        />
        <div className="flex items-center p-8 gap-10">
          <div className="bg-white rounded-2xl pt-2 col-span-3 border-2 border-green-600 -rotate-6">
            <MyPieChart />
          </div>
          <div className="flex flex-col gap-8 items-center">
            <h1 className="text-4xl md:text-6xl font-bold">CryptoFolio.me</h1>

            <h3 className="text-xl md:text-2xl md:font-bold text-left md:text-center">
              create your personalized page to{" "}
              <span className="underline">share what you really want</span>
            </h3>
            <LoginButton textLogin="Create your portfolio" />
            <span className="text-center">
              By login, you agree to our
              <Link href="/terms"> Terms of Service and Privacy Policy.</Link>
            </span>
          </div>

          <div className="bg-white rounded-2xl pt-2 col-span-3 col-end-8 border-2 border-green-600 rotate-6">
            <MyRadarChart data={RadarFakeData} />
          </div>
          {/* <div className="bg-white rounded-2xl col-span-7 border-2 border-green-600">
  <MyBarChart />
</div> */}
        </div>
      </div>

      <div
        id="link_section"
        className="flex items-center justify-around w-full h-full  p-16 gap-10"
      >
        <h1 className="text-4xl max-w-72">
          Get your unique link and show everyone your crypto portfolio
        </h1>
        <div className="bg-gray-200 min-h-96 flex items-center justify-center p-8">
          <h2 className="font-bold text-2xl">cryptoFolio.me/</h2>
          <h2 className="text-2xl">alex</h2>
        </div>
      </div>
      <div id="exchanges_section" className="flex items-center justify-around">
        <div>
          <img src="/bit2me.jpeg" alt="bit2me" className="h-32" />
          <img src="/binance.jpg" alt="binance" className="h-32" />
          <img src="/kraken.webp" alt="kraken" className="h-32" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl text-green-800">A door to trusted data </h1>
          <h1 className="text-4xl text-green-800">🚪🔒📊</h1>
          <h3 className="text-2xl">Connect your favorite exchanges</h3>
        </div>
      </div>
      <div
        id="configure_section"
        className="flex items-center justify-around w-full h-full p-16 gap-10"
      >
        <h1 className="text-4xl max-w-72">
          Set up your portfolio and show what you really want
        </h1>
        <img
          src="/portfolio-sample.png"
          alt="chart"
          className="h-132 border-2 border-green-600 rounded-2xl"
        />
      </div>

      <div id="xplore_section"></div>
      <div
        id="footer"
        className="flex flex-col items-center justify-center w-full p-16 gap-10 text-white bg-gradient-to-b from-gradient-start  via-gradient-middle to-gradient-end"
      >
        <LoginButton textLogin="Create your portfolio" />
        <span className="text-center">Build with ❤ by Rats2Lab</span>
      </div>
    </main>
  );
};

export default landing;

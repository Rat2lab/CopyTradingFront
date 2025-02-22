import Link from "next/link";

import LoginButton from "@/components/loginButton";
import { MyPieChart } from "@/components/MyPieChart";
import { MyRadarChart } from "@/components/MyRadarChart";
import "./globals.css";

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
    <main className="w-full ">
      <div className="w-full flex flex-col items-center justify-center md:bg-white md:text-black">
        <img
          src="/favicon1024x1024.ico"
          alt="CryptoFolio.me"
          className="h-20 md:h-32 mt-4"
        />
        <div className="flex flex-col md:flex-row items-center p-8 gap-10">
          <div className="bg-white rounded-2xl pt-2 col-span-3 border-2 border-green-600 -rotate-6 hidden md:block">
            <MyPieChart />
          </div>
          <div className="flex flex-col gap-8 items-center">
            <h1 className="text-4xl md:text-6xl font-bold">CryptoFolio.me</h1>

            <h3 className="text-xl md:text-2xl md:font-bold text-center">
              create your personalized page to{" "}
              <span className="underline">share what you really want</span>
            </h3>
            <LoginButton textLogin="Sign up with Google" />
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
        className="flex flex-col md:flex-row items-center justify-around w-full h-full p-8 md:p-16 gap-10"
      >
        <h1 className="text-4xl max-w-72 text-center md:text-left">
          Get your unique link and show everyone your crypto portfolio
        </h1>
        <div className="bg-gray-100 min-h-96 flex items-center justify-center p-8">
          <h2 className="font-bold text-2xl">cryptofolio.me/</h2>
          <div className="overflow-hidden h-72 relative">
            <div className="username-animation gap-0">
              <span className="username">atom</span>
              <span className="username">h20</span>
              <span className="username">lizzard</span>
              <span className="username">oblivion</span>
              <span className="username">ryuk</span>
              <span className="username">gerard</span>
              <span className="username">mike</span>
              <span className="username">anna</span>
              <span className="username">david</span>
              <span className="username">sarah</span>
              <span className="username">jude</span>
              <span className="username">alex</span>
              <span className="username">edu</span>
              <span className="username">luz</span>
              <span className="username">jacob</span>
              <span className="username">maria</span>
              <span className="username">tom</span>
              <span className="username">kev</span>
              <span className="username">liz</span>
              <span className="username">yuzz</span>
              <span className="username">olvier</span>
              <span className="username">smash</span>
              <span className="username">zzz</span>
              <span className="username">jess</span>

              {/* Add more usernames as needed */}
            </div>
            <div className="fade-out-top"></div>
            <div className="fade-out-bottom"></div>
          </div>
        </div>
      </div>
      <div
        id="exchanges_section"
        className="flex flex-col-reverse md:flex-row items-center justify-around p-8 md:p-16 gap-10"
      >
        <div className="relative h-80 w-80">
          <img src="/kraken.webp" alt="kraken" className="h-32 absolute " />
          <img src="/binance.jpg" alt="binance" className="h-32 absolute top-[30%] left-[15%]" />
          <img src="/bit2me.jpeg" alt="bit2me" className="h-32 absolute top-[60%] left-[30%]" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl text-green-800">A door to trusted data </h1>
          <h1 className="text-4xl text-green-800">🚪🔒📊</h1>
          <h3 className="text-2xl">Connect your favorite exchanges</h3>
        </div>
      </div>
      <div
        id="configure_section"
        className="flex flex-col md:flex-row items-center justify-around w-full h-full p-8 md:p-16 gap-10"
      >
        <h1 className="text-4xl max-w-72 text-center md:text-left">
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

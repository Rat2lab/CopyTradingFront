import Link from "next/link";

import LoginButton from "@/components/loginButton";
import { MyPieChart } from "@/components/MyPieChart";
import { MyRadarChart } from "@/components/MyRadarChart";
import { Button } from "@/components/ui/button";
import {
  DoubleArrowDownIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
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
      <div className="relative w-full h-screen flex flex-col items-center justify-center md:bg-white md:text-black">
        <img
          src="/favicon1024x1024.ico"
          alt="CryptoFolio.me"
          className="h-20 md:h-32 mt-4 md:mb-12"
        />
        <div className="flex flex-col md:flex-row items-center justify-around w-full p-8 gap-10">
          <div className="bg-white rounded-2xl pt-2 col-span-3 border-2 border-green-800 -rotate-6 hidden md:block">
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

          <div className="bg-white rounded-2xl pt-2 col-span-3 col-end-8 border-2 border-green-800 rotate-6">
            <MyRadarChart data={RadarFakeData} />
          </div>
          {/* <div className="bg-white rounded-2xl col-span-7 border-2 border-green-600">
  <MyBarChart />
</div> */}
        </div>
        <div className="absolute bottom-2">
          <DoubleArrowDownIcon className="animate-bounce h-4 w-4" />
        </div>
      </div>

      <div
        id="link_section"
        className="md:h-screen bg-green-100 flex flex-col md:flex-row items-center justify-around w-full p-8 md:p-16 gap-10"
      >
        <h1 className="text-4xl md:text-6xl max-w-[40rem] md:w-1/3 text-center md:text-justify">
          Get your unique link and show everyone your crypto portfolio
        </h1>
        <div className="bg-gray-100 min-h-96 md:w-1/3 flex items-center justify-center p-8 rounded-2xl border-2 border-green-800">
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
        className="md:h-screen flex flex-col-reverse md:flex-row items-center justify-around w-full p-8 md:p-16 gap-10"
      >
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img src="/exchanges.png" alt="kraken" className="w-full" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl md:text-6xl text-green-800">
            A door to trusted data{" "}
          </h1>
          <h1 className="text-4xl md:text-6xl text-green-800">🚪🔒📊</h1>
          <h3 className="text-2xl md:text-4xl">
            Connect your favorite exchanges
          </h3>
        </div>
      </div>
      <div
        id="configure_section"
        className="w-full bg-green-100 md:h-screen flex flex-col md:flex-row items-center justify-around p-8 md:p-16 gap-10"
      >
        <h1 className="text-4xl max-w-[40rem] md:text-6xl text-center md:text-justify">
          Set up your portfolio and show what you really want
        </h1>
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img
            src="/portfolio-sample.png"
            alt="chart"
            className="h-132 border-2 border-green-800 rounded-2xl"
          />
        </div>
      </div>

      <div
        id="xplore_section"
        className="flex flex-col items-center justify-center w-full p-16 gap-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Join our community</h1>
        <div className="flex items-center gap-2">
          <Link href={"/ale"}>
            <img
              src="https://avatars.githubusercontent.com/u/11692199?v=4"
              alt={"avatar"}
              className="w-20 rounded-full"
            />
          </Link>{" "}
          <Link href={"/edu"}>
            <img
              src="https://avatars.githubusercontent.com/u/54369857?v=4"
              alt={"avatar"}
              className="w-20 rounded-full"
            />
          </Link>{" "}
          <Link href={"/rat2lab"}>
            <img
              src="https://avatars.githubusercontent.com/u/190880981?v=4"
              alt={"avatar"}
              className="w-20 rounded-full"
            />
          </Link>{" "}
          <Link href={"/kev"}>
            <img
              src="https://avatars.githubusercontent.com/u/1"
              alt={"avatar"}
              className="w-20 rounded-full"
            />
          </Link>{" "}
          <Link href={"/sarah"}>
            <img
              src="https://avatars.githubusercontent.com/u/2"
              alt={"avatar"}
              className="w-20 rounded-full"
            />
          </Link>
        </div>
        <Button variant="outline">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
          <Link href={"/explore"}>Explore more portfolios</Link>
        </Button>
      </div>
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

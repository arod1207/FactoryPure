import Link from "next/link";
import {
  ChevronLeftSVG,
  FacebookDarkSVG,
  InstagramDarkSVG,
  LogoDarkSVG,
  TwitterDarkSVG,
} from "../Utils/Svgs";

export default function Location() {
  return (
    <main>
      <section>
        <img
          src="images/mobile/image-map@2x.png"
          alt="map"
          className="relative w-full"
        />
        <Link href="/">
          <div className="absolute top-0 flex cursor-pointer md:left-[39px]">
            <div className="flex h-[72px] w-[56px] items-center justify-center bg-[#d59663] ">
              <ChevronLeftSVG />
            </div>
            <button className="h-[72px] w-[204px] bg-[#151515] text-xl font-extrabold leading-[23.94px] text-[#ffffff]">
              BACK TO HOME
            </button>
          </div>
        </Link>
      </section>
      <section className="bg-[#151515]">
        <div className="gap-[68px] px-4 pt-12 md:flex md:px-[39px] md:pt-[88px] md:pb-[80px]">
          <h1 className="pb-12 text-[50px] font-black leading-[45px] text-white">
            OUR LOCATION
          </h1>
          <div>
            <h2 className="text-[32px] font-black leading-[32px] text-[#D5966c]">
              99 KING STREET
            </h2>
            <p className="py-5 text-lg font-light leading-7 text-white">
              Newport <br />
              RI 02840 <br />
              United States of America
            </p>
            <p className="pb-14 text-lg font-light leading-7 text-white md:pb-0">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-[#d5966c]">
        <div className="py-12 px-8 md:flex md:py-14">
          <div className="md:mr-[65px]">
            <LogoDarkSVG />
          </div>
          <p className="py-[38px] text-base font-light leading-[26px] md:mr-[133px] md:w-[281px] md:py-0">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="flex gap-5">
            <FacebookDarkSVG /> <InstagramDarkSVG /> <TwitterDarkSVG />
          </div>
        </div>
      </footer>
    </main>
  );
}

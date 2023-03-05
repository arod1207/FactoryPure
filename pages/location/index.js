import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeftSVG,
  FacebookDarkSVG,
  FacebookSVG,
  InstagramDarkSVG,
  InstagramSVG,
  LogoDarkSVG,
  TwitterDarkSVG,
  TwitterSVG,
} from "../../utlis/Svgs";

export default function Location() {
  const [hover, setHover] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  return (
    <main>
      <div>
        <img
          src="images/mobile/image-map@2x.png"
          alt="map"
          className="relative w-full md:hidden lg:hidden"
        />
        <img
          src="images/tablet/image-map@2x.png"
          alt="map"
          className="relative hidden h-[600px] w-full md:block lg:hidden"
        />
        <img
          src="images/desktop/image-map@2x.png"
          alt="map"
          className="relative hidden h-[600px] w-full lg:block"
        />

        <div
          className="absolute top-0 flex cursor-pointer md:left-[39px] lg:left-[156px]"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <div
            className={`${
              hover
                ? "flex h-[72px] w-[56px] items-center justify-center bg-[#151515]"
                : "flex h-[72px] w-[56px] items-center justify-center bg-[#d59663]"
            }`}
          >
            <ChevronLeftSVG />
          </div>
          <Link href="/">
            <button
              className={`${
                hover
                  ? "h-[72px] w-[204px] bg-[#d59663] text-xl font-extrabold leading-[23.94px] text-[#ffffff]"
                  : "h-[72px] w-[204px] bg-[#151515] text-xl font-extrabold leading-[23.94px] text-[#ffffff]"
              }`}
            >
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#151515]">
        <div className="gap-[68px] px-4 pt-12 md:flex md:px-[39px] md:pt-[88px] md:pb-[80px] lg:gap-[220px] lg:px-[165px] lg:pt-[104px]">
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
      </div>
      <footer className="bg-[#d5966c]">
        <div className="py-12 px-8 md:flex md:py-14  lg:px-[165px]">
          <div className="md:mr-[65px] lg:mr-[140px] ">
            <LogoDarkSVG />
          </div>
          <p className="lg:mr-[280px py-[38px] text-base font-light leading-[26px] text-[#151515] md:mr-[133px] md:w-[281px] md:py-0 lg:mr-[280px] lg:w-auto">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="flex gap-5">
            <div
              className="cursor-pointer"
              onMouseOver={() => setFacebook(true)}
              onMouseOut={() => setFacebook(false)}
            >
              {facebook ? <FacebookSVG /> : <FacebookDarkSVG />}
            </div>
            <div
              className="cursor-pointer"
              onMouseOver={() => setInstagram(true)}
              onMouseOut={() => setInstagram(false)}
            >
              {instagram ? <InstagramSVG /> : <InstagramDarkSVG />}
            </div>
            <div
              className="cursor-pointer"
              onMouseOver={() => setTwitter(true)}
              onMouseOut={() => setTwitter(false)}
            >
              {twitter ? <TwitterSVG /> : <TwitterDarkSVG />}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

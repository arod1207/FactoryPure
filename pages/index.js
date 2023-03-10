import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronRightSvg,
  FacebookGoldSVG,
  FacebookSVG,
  InstagramGoldSVG,
  InstagramSVG,
  LogoSVG,
  TwitterGoldSVG,
  TwitterSVG,
} from "../utlis/Svgs";

export default function Home() {
  const [hover, setHover] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  return (
    <>
      <Head>
        <title>Modern Art Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:m-auto md:w-full lg:relative">
        <div className="lg:flex">
          <div className="hidden lg:block lg:h-[800px] lg:w-[450px] lg:bg-[#151515]"></div>
          <img
            src="/images/mobile/image-hero@2x.jpg"
            alt="people looking at a painting"
            className="md:hidden"
          />
          <img
            src="/images/tablet/image-hero@2x.jpg"
            alt="people looking at a painting"
            className="hidden h-[700px] w-[437px] md:block lg:h-[800px] lg:w-[540px]"
          />

          <h1 className="hidden font-[900] leading-[88px] text-[#151515] lg:absolute lg:top-[189px] lg:left-[180px] lg:block lg:text-[96px] lg:text-white lg:mix-blend-difference">
            MODERN <br />
            ART GALLERY
          </h1>
          <div className="hidden lg:absolute lg:top-[190px] lg:left-[925px] lg:block lg:w-[350px]">
            <p className="text-lg font-light leading-[28px] text-[#444444]">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>

            <Link href="/location">
              <div
                className="mt-16 flex cursor-pointer"
                onMouseOver={(e) => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <button
                  className={`${
                    hover
                      ? "h-[72px] w-[204px] bg-[#d59663] text-xl font-extrabold leading-[23.94px] text-[#ffffff]"
                      : "h-[72px] w-[204px] bg-[#151515] text-xl font-extrabold leading-[23.94px] text-[#ffffff]"
                  }`}
                >
                  OUR LOCATION
                </button>
                <div
                  className={`${
                    hover
                      ? "flex h-[72px] w-[56px] items-center justify-center bg-[#151515]"
                      : "flex h-[72px] w-[56px] items-center justify-center bg-[#d59663] hover:bg-[#d59663] "
                  }`}
                >
                  <ChevronRightSvg />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-8 px-3 md:absolute md:top-[145px] md:left-[389px] md:h-[410px] md:w-[339px] lg:hidden">
          <h1 className="lg:font-white text-[60px] font-[900] leading-[55px] text-[#151515] lg:hidden">
            MODERN <br />
            ART GALLERY
          </h1>
          <p className="text-lg font-light leading-[28px] text-[#444444]">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>

          <Link href="/location">
            <div className="flex cursor-pointer">
              <button className="h-[72px] w-[204px] bg-[#151515] text-xl font-extrabold leading-[23.94px] text-[#ffffff]">
                OUR LOCATION
              </button>
              <div className="flex h-[72px] w-[56px] items-center justify-center bg-[#d59663]">
                <ChevronRightSvg />
              </div>
            </div>
          </Link>
        </div>
        {/* //Middle div// */}
        <div className="mt-[120px] px-4 lg:m-auto lg:mt-[180px] lg:max-w-[1110px]">
          <div className="md:max-height-[400px] md:flex md:flex-row-reverse lg:items-center lg:justify-between">
            <img
              src="/images/mobile/image-grid-1@2x.jpg"
              alt="art work"
              className="md:h-[400px] md:w-[398px] lg:hidden"
            />
            <img
              src="/images/desktop/image-grid-1@2x.jpg"
              alt="art work"
              className="hidden h-[400px] lg:block lg:max-w-[635px]"
            />
            <div className="md:flex md:flex-col lg:h-[280px] lg:w-[350px]">
              <div className="mt-[25px] mb-[21px]">
                <h1 className="mb-6 text-[50px] font-[900] leading-[45px] lg:mb-8">
                  YOUR DAY <br />
                  AT THE GALLERY
                </h1>
              </div>
              <div className="mb-[32px]">
                <p className="text-lg font-light leading-[28px]">
                  Wander through our distinct collections and find new insights
                  about our artists. Dive into the details of their creative
                  process.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-[11px]  md:flex md:h-[720px] md:space-x-2 lg:max-h-[1150px]  lg:space-x-[30px] lg:overflow-hidden">
            <div className="mb-[21px] md:mb-0">
              <img
                src="/images/mobile/image-grid-2@2x.jpg"
                alt="art work of a bench"
                className="md:block md:h-full md:min-w-[398px] lg:min-w-[635px]"
              />
            </div>
            <div className="mb-[21px] hidden md:mb-0">
              <img
                src="/images/desktop/image-grid-2@2x.jpg"
                alt="art work of a bench"
                className="hidden lg:block lg:h-[720px] lg:min-w-[635px]"
              />
            </div>
            <div className="grid grid-rows-1">
              <div className="mb-[16px] md:mb-[11px]">
                <img
                  src="/images/mobile/image-grid-3@2x.jpg"
                  alt="people looking at art"
                  className="md:h-[313px] md:w-[280px] lg:h-[313px] lg:w-[445px]"
                />
              </div>
              <div className="h-[293px] bg-[#151515] md:h-full">
                <div className="px-6 pt-12 pb-[47px] md:h-[396px] md:w-[280px] lg:h-[375px] lg:px-[48px] lg:py-[65px] lg:pr-0">
                  <h1 className="mb-6 text-[50px] font-black leading-[45px] text-white lg:leading-[60px]">
                    COME & BE <br />
                    INSPIRED
                  </h1>
                  <p className="text-lg font-light leading-7 text-white">
                    We???re excited to welcome you to our gallery and see how our
                    collections influence you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[120px] bg-[#151515]">
          <div className="py-12 px-8 md:flex md:py-14  lg:px-[165px]">
            <div className="md:mr-[65px] lg:mr-[140px] ">
              <LogoSVG />
            </div>
            <p className="lg:mr-[280px py-[38px] text-base font-light leading-[26px] text-white md:mr-[133px] md:w-[281px] md:py-0 lg:mr-[280px] lg:w-auto">
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>
            <div className="flex gap-5 ">
              <div
                className="cursor-pointer"
                onMouseOver={() => setFacebook(true)}
                onMouseOut={() => setFacebook(false)}
              >
                {facebook ? <FacebookGoldSVG /> : <FacebookSVG />}
              </div>
              <div
                className="cursor-pointer"
                onMouseOver={() => setInstagram(true)}
                onMouseOut={() => setInstagram(false)}
              >
                {instagram ? <InstagramGoldSVG /> : <InstagramSVG />}
              </div>
              <div
                className="cursor-pointer"
                onMouseOver={() => setTwitter(true)}
                onMouseOut={() => setTwitter(false)}
              >
                {twitter ? <TwitterGoldSVG /> : <TwitterSVG />}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

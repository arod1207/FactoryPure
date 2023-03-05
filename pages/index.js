import Head from "next/head";
import Link from "next/link";
import {
  ChevronRightSvg,
  FacebookSVG,
  InstagramSVG,
  LogoSVG,
  TwitterSVG,
} from "./Utils/Svgs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Art Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:m-auto md:w-full">
        <div>
          <img
            src="/images/mobile/image-hero@2x.jpg"
            alt="people looking at a painting"
            className="md:hidden"
          />
          <img
            src="/images/tablet/image-hero@2x.jpg"
            alt="people looking at a painting"
            className="hidden h-[700px] w-[437px] md:block"
          />
        </div>
        <section className=" mt-8 flex flex-col gap-8 px-3 md:absolute md:top-36 md:right-10 md:h-[410px] md:w-[339px]">
          <h1 className="text-[60px] font-[900] leading-[55px] text-[#151515]">
            MODERN
            <h1>ART GALLERY</h1>
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
        </section>
        <section className="mt-[120px] px-4">
          <div className="md:max-height-[400px] md:flex md:flex-row-reverse">
            <img
              src="/images/mobile/image-grid-1@2x.jpg"
              alt="art work"
              className="md:h-[400px] md:w-[398px]"
            />
            <div className="md:flex md:flex-col">
              <div className="mt-[25px] mb-[21px]">
                <h1 className="mb-6 text-[50px] font-[900] leading-[45px]">
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
          <div className="md:mt-[11px]  md:flex md:h-[720px] md:space-x-2">
            <div className="mb-[21px] md:mb-0">
              <img
                src="/images/mobile/image-grid-2@2x.jpg"
                alt="art work of a bench"
                className="md:h-[720px]"
              />
            </div>
            <div className="grid grid-rows-1">
              <div className="mb-[16px] md:mb-[11px]">
                <img
                  src="/images/mobile/image-grid-3@2x.jpg"
                  alt="people looking at art"
                  className="md:h-[313px]"
                />
              </div>
              <div className="h-[293px] bg-[#151515] md:h-full">
                <div className="px-6 pt-12 pb-[47px] md:h-[396px]">
                  <h1 className="mb-6 text-[50px] font-black leading-[45px] text-white">
                    COME & BE <br />
                    INSPIRED
                  </h1>
                  <p className="text-lg font-light leading-7 text-white">
                    We’re excited to welcome you to our gallery and see how our
                    collections influence you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-[120px] bg-[#151515]">
          <div className="py-12 px-8 md:flex md:py-14">
            <div className="md:mr-[65px]">
              <LogoSVG />
            </div>
            <p className="py-[38px] text-base font-light leading-[26px] text-white md:mr-[133px] md:w-[281px] md:py-0">
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>
            <div className="flex gap-5">
              <FacebookSVG /> <InstagramSVG /> <TwitterSVG />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

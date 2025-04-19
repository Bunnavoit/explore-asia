"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f5fcff] py-0 sm:py-20 md:py-20 ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-24 max-w-screen-xl mx-auto gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Start your journey <br />
            by one click, explore <br />
            beautiful world!
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us!
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <div className="px-3 py-2 bg-black rounded-md">
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={140}
                height={40}
              />
            </div>
            <Image
              src="/images/app-store.svg"
              alt="App Store"
              width={140}
              height={40}
            />
          </div>
        </div>

        <div className="relative w-full max-w-md h-[400px] bg-transparent rounded-xl">
          <Image
            src="/images/hero.png"
            alt="Travel Hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

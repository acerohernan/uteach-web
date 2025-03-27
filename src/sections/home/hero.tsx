import { companiesList } from "@/constants/companies";
import Image from "next/image";
import React from "react";

export const HomeHero = (): React.ReactElement => {
  return (
    <div className="home-container lg:flex lg:items-center lg:justify-between py-12 lg:py-20">
      {/* Right side */}
      <div>
        {/* Main section */}
        <div className="grid relative lg:max-w-[600px] gap-6 lg:gap-8">
          {/* Title */}
          <h1 className="relative text-[40px] font-bold leading-[44px] z-10 lg:text-[72px] lg:leading-[80px]">
            Teach students worldwide
          </h1>
          {/* Mobile line */}
          <img className="absolute top-[31px] left-[4px] lg:hidden" src="/images/title-line.svg" alt="title line" />
          {/* Desktop line */}
          <img
            className="hidden absolute lg:block top-[60px] lg:left-[8px] w-[190.5px]"
            src="/images/title-line-desktop.svg"
            alt="title line"
          />
          <p className="lg:text-[24px] lg:leading-[38px]">
            Amet nunc diam orci duis ut sit diam arcu, nec.
            <br />
            Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
          </p>
          {/* Call to action */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button className="bg-[var(--orange-600)] text-white px-7 py-3 rounded-lg lg:text-[24px] lg:px-12 lg:py-5 lg:font-bold">
              Sign Up Now
            </button>
            <button className="text-[var(--blue-600)] flex items-center gap-4 px-2 py-3 lg:text-[20px] lg:font-medium">
              <Image src="/images/play-circle.svg" alt="Play button icon" width={24} height={24} />
              View Demo
            </button>
          </div>
        </div>
        {/* Trusted by */}
        <div className="grid gap-4 mt-8 lg:mt-20 lg:flex lg:gap-12">
          <span className="text-[var(--blue-gray-600)] lg:max-w-[135px]">Trusted by leading companies</span>
          <div className="flex items-center gap-6 lg:gap-12">
            {companiesList.map((company) => (
              <Image alt={company.name} key={`trusted-by-${company.name}`} src={company.url} width={32} height={32} />
            ))}
          </div>
        </div>
      </div>
      {/* Left side */}
      <div className="mt-12 lg:mt-0">
        <img src="/images/hero-image-desktop.png" alt="Principal image" className="w-full object-cover" />
      </div>
    </div>
  );
};

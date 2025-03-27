import React from "react";
import Link from "next/link";
import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import { featuresCards, featuresList } from "@/constants/features";
import { formatToKebabCase } from "@/lib/format";

export const HomeFeatures = (): React.ReactElement => {
  return (
    <div className="home-container grid gap-8 lg:flex lg:justify-between lg:items-center lg:gap-20 py-12 lg:py-20">
      <div className="lg:max-w-[544px] grid gap-8 relative z-10">
        <div>
          {/* Subtitle */}
          <div className="relative">
            {/* Mobile line */}
            <img
              className="absolute top-[23px] left-[32px] w-[110px] h-[8px] object-cover lg:w-[252px] lg:top-[46px] lg:mx-auto lg:left-0 lg:right-35 lg:h-[14px]"
              src="/images/title-line.svg"
              alt="title line"
            />
            <h2 className="text-[24px] font-bold relative z-10 lg:text-[56px] lg:leading-16">
              An all-in-one app that makes it easier
            </h2>
          </div>
          <p className="mt-6 lg:text-[20px] lg:hidden">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
            imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>
        {/* Features */}
        <ul className="grid gap-4">
          {featuresList.map((feature) => (
            <li key={formatToKebabCase(feature)} className="flex gap-2 items-start lg:text-[20px] lg:items-center">
              <img src="/images/features-check.svg" alt="check icon" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <Link className="flex items-center gap-4 text-[var(--blue-600)] font-medium lg:text-[20px]" href="#">
          Find more about the app
          <ArrowLeftIcon />
        </Link>
      </div>

      <div className="relative lg:w-full">
        {/* Desktop image */}
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/features-web-desktop.png" />
          <img alt="Features image" src="/images/features-web-mobile.png" className="w-full z-10 relative" />
        </picture>

        {/* Background */}
        <img
          alt="Features background"
          src="/images/bg-features.svg"
          className="absolute top-0 w-[90%] rotate-14 left-[-40px] lg:w-auto"
        />
        {/* Cards */}
        <div className="flex gap-2 justify-end -mt-28 lg:gap-4 lg:mr-16 lg:-mt-36">
          {featuresCards.map((card) => (
            <div
              key={formatToKebabCase(card.title)}
              className={`relative z-10 card-xl bg-white space-y-2 max-w-[160px] lg:max-w-[200px] lg:w-[200px] lg:max-w-auto ${card.hideInMobile ? "hidden xl:block" : ""}`}
            >
              <span
                className={`text-sm inline-block px-2 py-1 rounded-sm ${card.tagClassName} text-[var(--blue-800)] bg-[var(--blue-100)]`}
              >
                {card.tag}
              </span>
              <h3 className="font-medium leading-4.5 lg:text-[20px] lg:leading-5.5">{card.title}</h3>
              <p className="text-xs text-[var(--blue-gray-600)] leading-4 lg:text-sm">{card.description}</p>
              <Link
                href="#"
                className="mt-4 block text-sm text-[var(--blue-600)] font-medium w-full text-center py-2 rounded-lg border-2"
              >
                Take Lesson
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

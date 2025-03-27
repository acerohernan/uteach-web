import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import Link from "next/link";
import React from "react";

export const HomeInternationalStudents = (): React.ReactElement => {
  return (
    <div className="home-container grid gap-6 lg:grid lg:grid-cols-2 lg:gap-11 lg:items-center py-12 lg:py-20">
      <div className="grid gap-6 lg:order-2 lg:gap-8">
        <h2 className="text-[24px] font-bold relative z-10 lg:text-[56px] lg:leading-16">
          Meet international students & teachers
        </h2>
        <p className="lg:text-[20px]">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo
          eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem
          faucibus integer.
        </p>
        <Link className="flex items-center gap-4 text-[var(--blue-600)] font-medium lg:text-[20px]" href="#">
          Explore teachers and students
          <ArrowLeftIcon />
        </Link>
      </div>
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/international-students-collage-desktop.png" />
        <img
          src="/images/international-students-collage-mobile.png"
          alt="International students photo collage"
          className="w-full lg:order-1"
        />
      </picture>
    </div>
  );
};

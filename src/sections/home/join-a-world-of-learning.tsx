import React from "react";

export const HomeJoinAWorldOfLearning = (): React.ReactElement => {
  return (
    <div className="bg-[var(--yellow-400)] relative lg:h-[800px]">
      <div className="home-container grid gap-8 py-4 h-full">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/student-cards-1-desktop.png" />
          <img
            src="/images/student-cards-1-mobile.png"
            alt="International students photo collage"
            className="w-full lg:w-auto lg:absolute lg:left-0 lg:top-[84px]"
          />
        </picture>

        <div className="flex flex-col items-center text-center gap-4 lg:justify-center lg:gap-8">
          <h3 className="text-[24px] font-bold relative z-10 lg:text-[56px] lg:leading-16">Join a world of learning</h3>
          <p className="leading-6 lg:text-[20px] lg:leading-8">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br />
            Risus elit et fringilla habitant ut facilisi.
          </p>
          <button className="bg-[var(--orange-600)] text-white px-7 py-3 rounded-lg lg:text-[24px] lg:px-12 lg:py-5 lg:font-bold">
            Sign Up Now
          </button>
        </div>

        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/student-cards-2-desktop.png" />
          <img
            src="/images/student-cards-2-mobile.png"
            alt="International students photo collage"
            className="w-full lg:w-auto lg:absolute lg:right-0 lg:top-[76px]"
          />
        </picture>
      </div>
    </div>
  );
};

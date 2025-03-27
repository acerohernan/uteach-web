import React from "react";

export const HomeAllTheTools = (): React.ReactElement => {
  return (
    <div className="lg:bg-[var(--blue-gray-100)] py-12 lg:py-20">
      <div className="home-container relative -mx-4 ">
        <div className="mx-4 relative z-10">
          {/* Subtitle */}
          <div className="relative">
            {/* Mobile line */}
            <img
              className="absolute top-[24px] left-[75px] w-[55px] lg:w-[130px] lg:top-[54px] lg:mx-auto lg:left-0 lg:right-45"
              src="/images/title-line.svg"
              alt="title line"
            />
            <h2 className="text-[24px] font-bold relative z-10 lg:text-[56px] lg:text-center">
              All the tools that you need
            </h2>
          </div>
          <p className="mt-6 lg:text-[20px] lg:text-center lg:max-w-[850px] lg:mx-auto">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
            imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>
        {/* Image and background containter */}
        <div className="relative lg:mt-20">
          <img
            className="w-full p-4 z-10 relative lg:hidden"
            src="/images/uteach-page.svg"
            alt="uteach page ilustration"
          />
          <img
            className="hidden lg:block w-full p-4 z-10 relative"
            src="/images/uteach-page-desktop.svg"
            alt="uteach page ilustration"
          />

          <img className="-mt-4 w-[19%] ml-[34.6%] lg:hidden" src="/images/tools-line.svg" alt="title line" />
          <img
            className="-mt-15 w-[90%] hidden lg:block lg:mx-auto"
            src="/images/tools-line-desktop.svg"
            alt="title line"
          />

          <img className="w-full pl-4 lg:hidden" src="/images/uteach-tools.svg" alt="uteach tools ilustration" />
          <img
            className="w-full pl-4 hidden lg:block"
            src="/images/uteach-tools-desktop.svg"
            alt="uteach tools ilustration"
          />
          {/* Mobile background */}
          <img className="w-[30%] absolute top-0 left-0 lg:hidden" src="/images/bg-tools-1.svg" alt="title line" />
          <img
            className="w-[32.56%] absolute right-0 top-[-47%] lg:hidden"
            src="/images/bg-tools-2.svg"
            alt="title line"
          />

          {/* Desktop background */}
          <img
            className="hidden lg:block w-[43.5%] absolute top-0 -ml-32"
            src="/images/bg-tools-1-desktop.svg"
            alt="title line"
          />
          <img
            className="hidden lg:block w-[40.5%] absolute top-[-320px] right-[-50px]"
            src="/images/bg-tools-2-desktop.svg"
            alt="title line"
          />
        </div>
      </div>
    </div>
  );
};
